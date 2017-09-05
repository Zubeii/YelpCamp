var express = require("express");
var app = express();

app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("landing");
});

app.get("/campgrounds", function(req, res){
    var campgrounds = [
        {name: "Salmon Creek", image: "https://farm4.staticflickr.com/3872/14435096036_39db8f04bc.jpg"},    
        {name: "Bowser Point", image: "https://farm3.staticflickr.com/2353/2069978635_2eb8b33cd4.jpg"},    
        {name: "Yeti's Rest", image: "https://farm2.staticflickr.com/1363/1342367857_2fd12531e7.jpg"}    
    ]
    
    res.render("campgrounds", {campgrounds: campgrounds});
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("YelpCamp Server has Started!")
});