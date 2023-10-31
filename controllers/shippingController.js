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
    console.log("sender", reveiverCountry);
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
            // postalCode: "486058",
            postalCode: sender.postal_code,
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
                currency: "SGD",
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
    const body = req.body;
    const data = {
      cust_code: "001098",
      merchant_outlet_id: "01",
      merchant_return_url: body.merchant_return_url,
      terminal_id: "001",
      description: body.description,
      currency: "SGD",
      amount: body.amount,
      order_id: "uuid_1_uufghfg5ghghidsd",
      user_fullname: body.user_fullname,
      user_email: body.user_email,
    };
    console.log(data);
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
  async QouteShipping(req, res) {
    console.log(req.body);
    ("");
    const { packages, country, postal_code, from_postal_code } = req.body;
    // const { recipient, packages, sender, addons, date } = req.body;
    // const { country: senderCountry } = sender;
    // const { quantity, description, category, value, weight } =
    //   req.body.packages[0].items[0];
    // console.log("sender", sender);

    function getRandomPostalCode(countryCode) {
      const countryPostalCodes = postalCodes[countryCode];
      if (!countryPostalCodes || countryPostalCodes.length === 0) {
        return "Postal codes not available for this country.";
      }
      const randomIndex = Math.floor(Math.random() * countryPostalCodes.length);
      return countryPostalCodes[randomIndex];
    }
    try {
      // const stateResponse = await axios.get(
      //   `https://app.zipcodebase.com/api/v1/country/province?apikey=a6618ae0-6c69-11ee-b32f-1dbde90525b8&country=${country}`
      // );
      // const countState = stateResponse.data.results.length;
      // const state = stateResponse.data.results[countState - 1];
      // console.log("Response from OIS-Bizcraft API:", state);
      // const postalResponse = await axios.get(
      //   `https://app.zipcodebase.com/api/v1/code/state?apikey=a6618ae0-6c69-11ee-b32f-1dbde90525b8&state_name=${state}&country=${country}&limit=10`
      // );
      // const count = postalResponse.data.results.length;
      // let postal_code = postalResponse.data.results[count - 1];
      // // if (!postal_code) {
      // //   postal_code = 79701;
      // //   country = "US";
      // // }
      // console.log("Response from OIS-Bizcraft API:", postal_code);
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
              postalCode: postal_code,
              // postalCode: 1201,
              countryCode: "SG",
            },
          },
          recipient: {
            address: {
              postalCode: from_postal_code,
              countryCode: country,
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
        console.log(shippingRate);
        res.json({ shippingRate });
      } catch (error) {
        console.log(error);
        res.status(500).json({ error: error });
      }
      // Handle the response from the OIS-Bizcraft API here as needed
    } catch (error) {
      console.error("Error calling OIS-Bizcraft API:", error);
      // Handle errors here if the API call fails
    }
  },
};

export default shippingController;
