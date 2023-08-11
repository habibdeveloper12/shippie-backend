import CryptoJS from "crypto-js";
function conversion(secret, message) {
  var hash = CryptoJS.HmacSHA1(message, secret);
  var signature = CryptoJS.enc.Hex.stringify(hash);
  return signature.toUpperCase();
}
export function generateHMAC(data, secretKey) {
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
