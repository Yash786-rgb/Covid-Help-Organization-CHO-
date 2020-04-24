var unirest = require("unirest");
var req = unirest("GET","http://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=your_API_Key" );
var tset;
req.headers({
	"x-rapidapi-host": "covid-19-coronavirus-statistics.p.rapidapi.com",
	"x-rapidapi-key": "029c874cf7mshb32ae806b4a41f4p1deeb8jsn54c0c82298a3"
});
req.end(function (res) {
    if (res.error) throw new Error(res.error);
    // console.log(res.body.articles[3].title);
    // var num = Math.floor(Math.random()*20);
    // console.log(num);
    // console.log(res.body.articles.length);
    tset = res.body.articles;
})
var Pro = new Promise((resolve,reject)=>{ 
     setTimeout(()=>{
         resolve(tset);
     },5000)
})
  
       
module.exports = Pro;
