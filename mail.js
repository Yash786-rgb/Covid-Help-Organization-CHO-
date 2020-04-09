const nodeMailer = require("nodemailer");
const mailGun  = require("nodemailer-mailgun-transport");


const auth = { 
     auth:{  
       api_key:"your api key",
       domain:"your domain"
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


