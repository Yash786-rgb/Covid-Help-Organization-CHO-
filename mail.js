const nodeMailer = require("nodemailer");
const mailGun  = require("nodemailer-mailgun-transport");


const auth = { 
     auth:{  
       api_key:"a3be8970922075656161807c27f8d3e6-46ac6b00-bb9429e4",
       domain:"sandbox20cb8f1b0d1c42b2888a97e1aa3fe767.mailgun.org"
     }
}

const transporter = nodeMailer.createTransport(mailGun(auth))

function Mail(from,sub,text){
const mailOptions = {
    from:from,
    to:"yash.18ag@gmail.com",
    subject:sub,
    text:text

};
transporter.sendMail(mailOptions, function(err,data){ 
     if(err){ 
          console.log(err);
     }else{ 
          // console.log("message sent ");
     }
})
}



module.exports = Mail;


