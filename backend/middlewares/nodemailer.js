const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    host: "smtp.forwardemail.net",
    port: 465,
    secure: true,
    auth: {
      // TODO: replace `user` and `pass` values from <https://forwardemail.net>
      user: "",
      pass: "REPLACE-WITH-YOUR-GENERATED-PASSWORD",
    },
  });