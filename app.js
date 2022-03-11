const express = require("express");
const bodyParser = require("body-parser");
const twilio = require('twilio');

const app = express();

const accountSid = 'AC3e2d097238c85a38bac3565baf46c60e'; // Your Account SID from www.twilio.com/console
const authToken = '3bfcfb32c2dbe6dadbaa6f4d96275bb5'; // Your Auth Token from www.twilio.com/console


var authy = require('authy')('wUqI86cVLaV1D5F2aUp3Zp1lfcZEH4Xi');

app.get("/", function(res,req){
  authy.request_sms(authy_id, function (err, res) {
    console.log(res.message);
  });

})

// const client = new twilio(accountSid, authToken);
//
// app.get("/", function(req, res){
//   client.messages
//     .create({
//       body: 'Hello from Node',
//       to: '+917079320584', // Text this number
//       from: '+9608475148', // From a valid Twilio number
//     })
//     .then((message) => console.log(message.sid));
//
// });

// const config = require("./config")
// // const accountSid = 'AC3e2d097238c85a38bac3565baf46c60e'; // Your Account SID from www.twilio.com/console
// // const authToken = '3bfcfb32c2dbe6dadbaa6f4d96275bb5'; // Your Auth Token from www.twilio.com/console
//
// const client = new twilio(config.accountSid, config.authToken);
//
// // app.get("/", function(req, res){
// //   res.sendFile(__dirname + "/otp.html");
// // });
//
// app.get("/login", function(req, res){
//   // const num = req.body.number;
//
//   client
//     .verify
//     .services(config.serviceID)
//     .verifications
//     .create({
//       to: req.query.phonenumber,
//       channel: req.query.channel
//     })
//     .then((data) => res.status(200).send(data));
//
// });
// //   var authy = require('authy')('APIKEY');
// //
// // authy.request_sms(authy_id, force=true, function (err, res) {
// //   console.log(res.message);
// // });
// // wUqI86cVLaV1D5F2aUp3Zp1lfcZEH4Xi
// // SK26379c5cbd2d2038c314175be00c07b0
// // app.get("/", function(req, res){
// //
// // });
//

app.listen(3000, function(req, res){
  console.log("App is running on 3000");
});
