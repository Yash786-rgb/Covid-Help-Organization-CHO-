var Cases = [] 
var unirest = require('unirest');
var req = unirest('GET', 'https://corona.lmao.ninja/v2/countries')
  .end(function (res) { 
    if (res.error) throw new Error(res.error); 
    // console.log(JSON.parse(res.raw_body));
    Cases = JSON.parse(res.raw_body);
    // console.log(Cases[0])
  });

  var Pro = new Promise((resolve,reject)=>{ 
       setTimeout(()=>{

        resolve(Cases);
       },10000)
  })
  module.exports = Pro;
