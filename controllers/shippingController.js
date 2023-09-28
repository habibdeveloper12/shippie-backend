import { Shipping } from "../models/index.js";
import Easypost from "@easypost/api";
import CustomErrorHandler from "../services/CustomErrorHandler.js";
import axios from "axios";
import { generateHMAC } from "../middlewares/generateHM.js";
import nodemailer from "nodemailer";
const shippingController = {
  async store(req, res, next) {
    const { sender, recipient, addons, date } = req.body;
    let document;
    try {
      document = await Shipping.create({
        sender,
        recipient,
        packages: req.body.packages,
        addons,
      });
    } catch (err) {
      return next(err);
    }
    res.status(201).json(document);
  },

  async setPaymentLink(req, res, next) {
    const { link } = req.body;

    let document;
    try {
      document = await Shipping.findOneAndUpdate(
        { _id: req.params.id },
        { paymentLink: link },
        { new: true }
      );
    } catch (err) {
      return next(err);
    }
    res.status(201).json(document);
  },

  async show(req, res, next) {
    let document;
    try {
      document = await Shipping.findOne({ _id: req.params.id }).select(
        "-updatedAt -__v"
      );
    } catch (err) {
      return next(CustomErrorHandler.serverError());
    }
    return res.json(document);
  },
  async orders(req, res, next) {
    let document;
    try {
      document = await Shipping.find({ userid: req.params.id }).select(
        "-updatedAt -__v"
      );
    } catch (err) {
      return next(CustomErrorHandler.serverError());
    }
    return res.json(document);
  },

  async shippingRate(req, res) {
    console.log(req.body);
    const { recipient, packages, sender, addons, date } = req.body;
    const { postal_code: recieverPostal, country: reveiverCountry } = recipient;

    const { country: senderCountry } = sender;
    const { quantity, description, category, value, weight } =
      req.body.packages[0].items[0];
    console.log("description", description);
    const requestedPackageLineItems = packages.map((p) => {
      return {
        weight: {
          units: "KG",
          value: +p.box.weight,
        },
        dimensions: {
          length: +p.box.length,
          width: +p.box.width,
          height: +p.box.height,
          units: "CM",
        },
      };
    });
    const shippingData = {
      accountNumber: {
        value: "121059770",
      },
      rateRequestControlParameters: {
        returnTransitTimes: true,
      },
      requestedShipment: {
        shipper: {
          address: {
            postalCode: "486058",
            countryCode: "SG",
          },
        },
        recipient: {
          address: {
            postalCode: recieverPostal,
            countryCode: reveiverCountry,
          },
        },
        pickupType: "DROPOFF_AT_FEDEX_LOCATION",
        rateRequestType: ["LIST", "ACCOUNT"],
        customsClearanceDetail: {
          dutiesPayment: {
            paymentType: "SENDER",
            payor: {
              responsibleParty: null,
            },
          },
          commodities: [
            {
              description: " GOod for kids computers",
              quantity: 1,
              quantityUnits: "PCS",
              weight: {
                units: "KG",
                value: 2,
              },
              customsValue: {
                amount: 5,
                currency: "USD",
              },
            },
          ],
        },
        requestedPackageLineItems: requestedPackageLineItems,
      },
    };
    try {
      const authResponse = await axios.post(
        "https://apis.fedex.com/oauth/token",
        {
          grant_type: "client_credentials",
          client_id: "l705f47025631443e39c111c0956a335c5",
          client_secret: "3ae0c814-6b79-46e3-b9d6-e7849ef09ef7",
        },
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );

      const accessToken = authResponse.data.access_token;
      console.log("Access", accessToken);
      const rateResponse = await axios.post(
        "https://apis.fedex.com/rate/v1/rates/quotes",
        shippingData,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      // console.log("ship,", rateResponse)
      const shippingRate = rateResponse.data.output.rateReplyDetails;
      res.json({ shippingRate });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: error });
    }
  },
  async RateOisPayment(req, res) {
    const data = req.body;
    // const data = {
    //   cust_code: "001098",
    //   merchant_outlet_id: "01",
    //   merchant_return_url: "https://google.com",
    //   terminal_id: "001",
    //   description: "ghghgh",
    //   currency: "SGD",
    //   amount: 1000,
    //   order_id: "uuid_1_uufghfg5ghghidsd",
    //   user_fullname: "Michael Scott",
    //   user_email: "userEmail@test.com",
    // };

    data.hash = generateHMAC(data, "OGVQ4KW90AMBRR5YA34YPLDI3ZJJANGU");

    const apiUrl = "https://portalapi.oisbizcraft.com/api/payments";

    try {
      const response = await axios.post(apiUrl, data);
      res.json(response.data);
      console.log("Response from OIS-Bizcraft API:", response.data);
      // Handle the response from the OIS-Bizcraft API here as needed
    } catch (error) {
      console.error("Error calling OIS-Bizcraft API:", error);
      // Handle errors here if the API call fails
    }
  },
  async Contact(req, res) {
    const data = req.body;
    console.log(data);
    // Create a transporter object using the default SMTP transport
    const transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      auth: {
        user: "marcelo7@ethereal.email",
        pass: "nt5NVwMrF8KNjJhfBa",
      },
    });

    // Email data
    const mailOptions = {
      from: "sunrahman19@gmail.com", // Sender's email address
      to: "habiburdeveloper7@example.com", // Recipient's email address
      subject: data.subject,
      text: data.message,
    };

    // Send the email
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("Error sending email:", error);
      } else {
        console.log("Email sent:", info.response);
      }
    });
  },
};

export default shippingController;
