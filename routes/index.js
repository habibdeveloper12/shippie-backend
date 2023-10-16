import express from "express";
const router = express.Router();
import { shippingController } from "../controllers/index.js";

router.post("/shippings", shippingController.store);
router.put("/shippings/:id", shippingController.setPaymentLink);
router.get("/shippings/:id", shippingController.show);
router.get("/orders/:id", shippingController.orders);
router.post("/getShippingRate", shippingController.shippingRate);
router.post("/getqoute", shippingController.QouteShipping);
router.post("/request-payment", shippingController.RateOisPayment);
router.post("/contact", shippingController.Contact);

export default router;
