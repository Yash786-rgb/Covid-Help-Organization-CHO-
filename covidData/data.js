
var conf = 0;
var death = 0;
var recover = 0;
var unirest = require("unirest");
var Cor = [];
var China = [];
var chinaData = [];
var indiaData = [];
var Canada = [];
var US = [];
var Australia = [];
var Mexico = [];
var southAfrica = [];
var India = [];
var Pakistan = [];
var Italy = [];
var Country = [];
var req = unirest("GET", "https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/stats");

req.headers({
	"x-rapidapi-host": "covid-19-coronavirus-statistics.p.rapidapi.com",
	"x-rapidapi-key": "029c874cf7mshb32ae806b4a41f4p1deeb8jsn54c0c82298a3"
});
req.end(function (res) {
	if (res.error) throw new Error(res.error);
	 Cor = res.body.data.covid19Stats;
	//  console.log(Cor);
	 for(var i = 0;i<Cor.length;i++){ 
		if(Cor[i].country == "China"){
			//  console.log(Cor[i].confirmed);
			 China.push(Cor[i]);
			//  console.log(China);
		}else if(Cor[i].country == "Mexico"){ 
			Mexico.push(Cor[i]);
		}else if(Cor[i].country == "Canada"){ 
			 Canada.push(Cor[i]);
		}else if(Cor[i].country == "Australia"){ 
			 Australia.push(Cor[i]);
		}else if(Cor[i].country == "US"){
			US.push(Cor[i]);
		}else if(Cor[i].country == "India"){ 
			India.push(Cor[i]);
		}else if(Cor[i].country == "Pakistan"){ 
			Pakistan.push(Cor[i]);
		}else if(Cor[i].country == "Italy"){
			Italy.push(Cor[i]);
		}
		else if(Cor[i].country == "South Africa"){
			southAfrica.push(Cor[i]);
		}
   }

   for(var i = 0;i<China.length;i++){
	    
		conf += China[i].confirmed;
		death += China[i].deaths;
		recover += China[i].recovered;
	
	   
}
chinaData = [conf,death,recover];

conf = 0;
death = 0;
recover = 0;


for(var i = 0;i<India.length;i++){
	    
	conf += India[i].confirmed;
	death +=  India[i].deaths;
	recover +=  India[i].recovered;

   
}
indiaData = [conf,death,recover];

conf = 0;
death = 0;
recover = 0;
	
Ind = {name:"India",
       data:indiaData
  }

  Chi = {name:"China",
         data:chinaData
   
}


 
   
});
var Pro = new Promise((resolve,reject)=>{ 
	  setTimeout(()=>{ 
		//    Country = [chinaData,Canada,US,Australia,Mexico,southAfrica,indiaData,Pakistan,Italy];
		Country = [Ind,Chi];
		   resolve(Country);
	  },10000)

}) 

module.exports = Pro;






