require("dotenv").config();
const nodemailer = require("nodemailer");

var transport = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD
  }
});

const customOrder = (req, res) => {
  console.log(req.body);
  var { name } = req.body;
  var { email } = req.body;
  var { message } = req.body;
  var content = `name: ${name} \n email: ${email} \n message: ${message} `;
  var mail = {
    from: name,
    to: process.env.EMAIL,
    subject: "New Custom Order Message",
    text: content
  };
  transport
    .sendMail(mail)
    .then(response => {
      res.status(200).json(response);
    })
    .catch(error => {
      console.log(error);
      res.status(500).send(error);
    });
};

const subscribeNews = (req, res) => {
  console.log(req.body);
  var { name } = req.body;
  var { email } = req.body;
  var message = `Please add ${email} to the Shop-Lidora newsletter list.`;
  // var content = `name: ${name} \n email: ${email} \n message: ${message} `;
  var mail = {
    from: name,
    to: process.env.EMAIL,
    subject: "Subscribe to Newsletter",
    text: message
  };
  transport
    .sendMail(mail)
    .then(response => {
      res.status(200).json(response);
    })
    .catch(error => {
      console.log(error);
      res.status(500).send(error);
    });
};

module.exports = { customOrder, subscribeNews };
