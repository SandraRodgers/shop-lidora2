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
  console.log(req.body)
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
  transport.sendMail(mail);
};

module.exports ={customOrder}
