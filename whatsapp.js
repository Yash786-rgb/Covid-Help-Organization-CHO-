const accountSid = 'AC8ff3add2f46cf1c896009021f19ab557'; 
const authToken = '377f8550a7ba94264ffb84398b07ef30';

   
// const client = require("twilio")();
const client = require('twilio')(accountSid, authToken); 
client.messages 
      .create({ 
         body: 'Hello!.', 
         from: '+919680790435',       
         to:  '+14155238886'
       }) 
      .then(message => console.log(message.sid)) 
      .done();
