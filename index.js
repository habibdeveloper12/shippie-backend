import express from "express";
import { APP_PORT, DB_URL } from "./config/index.js";
import errorHandler from "./middlewares/errorHandler.js";
const app = express();
import routes from "./routes/index.js";
import bodyParser from "body-parser";
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
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); // Replace with your origin
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");

  if (req.method === "OPTIONS") {
    res.sendStatus(200);
  } else {
    next();
  }
});
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

// Call the function to make the API request
// postToOISBizcraftApi();

app.use(express.static("./public", { maxAge: 86400000 }));
app.use(fallback("index.html", { root: "./public" }));

app.use(errorHandler);
const PORT = process.env.PORT || APP_PORT;
app.listen(PORT, () => console.log(`Listening on port ${PORT}.`));
