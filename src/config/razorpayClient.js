const Razorpay = require('razorpay');

apiKey="rzp_test_pjeROc7USOUhHt"
apiSecret="hLrh1Ozcd2hq7Zgnt1aFxpMO"

const razorpay = new Razorpay({
    key_id: apiKey,
    key_secret: apiSecret,
  });


  module.exports=razorpay;