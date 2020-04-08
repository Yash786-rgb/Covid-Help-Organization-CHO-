var fullNews;
var Update;
var Count = [];
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var bdyParser = require("body-parser");
var emailExistence = require("email-existence");
var Mail = require("./mail.js");

var express = require("express");
var app = express();
var covidData = require("./covidData/data1.js");
var newsData = require("./newsData/data.js");
app.use(bdyParser.urlencoded({extended:true}));

newsData.then((d)=>{ 
     fullNews = d;
     var num1 = Math.floor(Math.random()*16);
     var num2 = num1 + 1;
     var num3 = num1 + 2;
     var num4 = num1 + 3;
     var num5 = num1 + 4;
     var num6 = num1 + 5;
     var num7 = num1 + 6;
     var num8 = num1 + 7;
     var num9 = num1 + 8;
    
     
     var published = new Date(d[num2].publishedAt);
     var toPrint = published.getDate()+" "+ months[published.getMonth()]+" "+published.getFullYear();
     
     news9 = [d[num1],d[num2],d[num3],d[num4],d[num5],d[num6],d[num7],d[num8],d[num9]];     
})
covidData.then((Cases)=>{ 

       Count = Cases;
     
     var up = Cases[0].updated;
     Update = new Date(up).toLocaleString();
})


app.get("/",function(req,res){ 
   res.render("more2.ejs");
})
app.get("/home",function(req,res){ 

res.render("home.ejs",{newsArray:news9,fullData:Count,months:months,time:Update})
          
      })
   
app.get("/covidStats",function(req,res){ 

          res.render("covidStats.ejs",{fullData:Count,time:Update});

    
})
app.get("/precautions",function(req,res){  
       
     res.render("precautions.ejs")   
})



app.get("/news",function(req,res){
      

          res.render("news.ejs",{newsArray:fullNews,months:months});

     
})
app.get("/register",function(req,res){  

     res.render("register.ejs",{isInvalidEmail:false,isMissing:false});

})

app.post("/register",function(req,res){ 
     var sub = "Application for Covid-19 checkup"
     var text = "Dear Sir , I " + req.body.name + ",son of " + req.body.fatherName + 
     " wants to register myself for checkup for Covid-19 . I have following symptoms:" + req.body.symptoms + 
     ". My Address is " + req.body.address + "," + req.body.city + ","+ req.body.state  +"," +req.body.zip +
     " ,My contact No. is " + req.body.contactNo ;
     if(req.body.name == "" || req.body.fatherName == ""|| req.body.motherName == "" || req.body.email == "" || req.body.contactNo == "" ||req.body.zip == "" ||req.body.address == "" ||req.body.city == "" ||req.body.state == "" ||req.body.symptoms == "")
 {  
      res.render("register.ejs",{isInvalidEmail:false,isMissing:true})
 }else{
 emailExistence.check(req.body.email, function(error, response){
     
     if(!response){ 
          res.render("register.ejs",{isInvalidEmail:true,isMissing:false});
     }else{ 
          res.render("formSubmitted.ejs");
          
          // Mail(req.body.email,sub,text);

     }

 });
}
      
})


let port = 5988;
app.listen(port , function(){ 
console.log("server started") 
} );

