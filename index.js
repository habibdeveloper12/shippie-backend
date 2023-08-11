import express from "express";
import { APP_PORT, DB_URL } from "./config/index.js";
import errorHandler from "./middlewares/errorHandler.js";
const app = express();
import routes from "./routes/index.js";
import bodyParser from "body-parser";
import crypto from "crypto-js";
import CryptoJS from "crypto-js";
function conversion(secret, message) {
  var hash = CryptoJS.HmacSHA1(message, secret);
  var signature = CryptoJS.enc.Hex.stringify(hash);
  return signature.toUpperCase();
}
import mongoose from "mongoose";
import path from "path";
import cors from "cors";
import fallback from "express-history-api-fallback";
import axios from "axios";
// Database connection
mongoose.connect(DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("DB connected...");
});
app.use(bodyParser.json());
global.appRoot = path.resolve("./");
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/api", routes);
app.use("/uploads", express.static("uploads"));
app.use(
  cors({
    origin: "https://shippee.sg",
    methods: "GET,POST,PUT,DELETE", // Adjust as needed
  })
);
// app.use('/', (req, res) => {
//     res.send(`
//   <h1>Welcome to E-commerce Rest APIs</h1>
//   You may contact me <a href="https://codersgyan.com/links/">here</a>
//   Or You may reach out to me for any question related to this Apis: codersgyan@gmail.com
//   `);
// });

// const sendPaymentRequest = async () => {
//   const url = "https://portalapi.oisbizcraft.com/api/payments";
//   const cust_code = "001098";
//   const merchant_outlet_id = "01";
//   const terminal_id = "001";
//   const merchant_return_url =
//     process.env.NODE_ENV === "production"
//       ? "/thanks"
//       : "http://localhost:3001/thanks";
//   // const description = `Shipment by ${sender.first_name} ${sender.last_name} to ${recipient.name}`;
//   const description = `Shipment by Habib`;
//   const currency = "SGD";
//   const amount = 10;
//   const order_id = "usdfs1id";
//   const user_fullname = "sdf sdf";
//   const secret_key = "OGVQ4KW90AMBRR5YA34YPLDI3ZJJANGU";
//   const hashString = `${cust_code}${merchant_outlet_id}${terminal_id}${merchant_return_url}${description}${currency}${amount}${order_id}${user_fullname}`;
//   const hash = CryptoJS.HmacSHA1(hashString, secret_key);
//   const signature = CryptoJS.enc.Hex.stringify(hash);
//   const hashed = signature.toUpperCase();
//   const requestData = {
//     order_id: "001",
//     merchant_outlet_id: "01",
//     terminal_id: "001",
//     cust_code: "001098",
//     merchant_return_url:
//       "https%3A%2F%2Fpayhere.oisbizcraft.com%2Fcheck-status%2F2195f7f478c06c41da439329624ea5571d83e79eaedf7f82a4448aeae74c6dd9",
//     amount: 10000,
//     currency: "SGD",
//     description: description,
//     user_fullname: "Michael Scott",
//     hash: hashed,
//   };

//   try {
//     const response = await axios.post(url, requestData);

//     console.log(response.data); // Process the response as needed
//   } catch (error) {
//     console.error(error); // Handle any errors that occur during the request
//   }
// };

// sendPaymentRequest();

app.post("/request-payment", async (req, res) => {
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
});

function generateHMAC(data, secretKey) {
  const string =
    data.cust_code +
    data.merchant_outlet_id +
    data.terminal_id +
    data.merchant_return_url +
    data.description +
    data.currency +
    data.amount +
    data.order_id +
    data.user_fullname;

  const hmac = CryptoJS.HmacSHA256(string, secretKey);
  return hmac.toString().toUpperCase();
}
function generateRandomStr(length) {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}
// Call the function to make the API request
// postToOISBizcraftApi();

app.use(express.static("./public", { maxAge: 86400000 }));
app.use(fallback("index.html", { root: "./public" }));

app.use(errorHandler);
const PORT = process.env.PORT || APP_PORT;
app.listen(PORT, () => console.log(`Listening on port ${PORT}.`));
