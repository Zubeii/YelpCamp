var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

var campgrounds = [
    {name: "Salmon Creek", image: "https://farm4.staticflickr.com/3872/14435096036_39db8f04bc.jpg"},    
    {name: "Bowser Point", image: "https://farm4.staticflickr.com/3872/14435096036_39db8f04bc.jpg"},    
    {name: "Yeti's Rest", image: "https://farm2.staticflickr.com/1363/1342367857_2fd12531e7.jpg"},
    {name: "Salmon Creek", image: "https://farm4.staticflickr.com/3872/14435096036_39db8f04bc.jpg"},    
    {name: "Bowser Point", image: "https://farm4.staticflickr.com/3872/14435096036_39db8f04bc.jpg"},    
    {name: "Yeti's Rest", image: "https://farm2.staticflickr.com/1363/1342367857_2fd12531e7.jpg"},
    {name: "Salmon Creek", image: "https://farm4.staticflickr.com/3872/14435096036_39db8f04bc.jpg"},    
    {name: "Bowser Point", image: "https://farm4.staticflickr.com/3872/14435096036_39db8f04bc.jpg"},    
    {name: "Yeti's Rest", image: "https://farm2.staticflickr.com/1363/1342367857_2fd12531e7.jpg"}
    
];

app.get("/", function(req, res){
    res.render("landing");
});

app.get("/campgrounds", function(req, res){
    res.render("campgrounds", {campgrounds: campgrounds});
});

app.post("/campgrounds", function(req, res){
    // get data from form and add to campgrounds array
    var name = req.body.name;
    var image = req.body.image;
    var newCampground = {name: name, image: image}
    campgrounds.push(newCampground);
    // redirect back to camgrounds page
    res.redirect("/campgrounds");
});

app.get("/campgrounds/new", function(res,res){
    res.render("new");
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("YelpCamp Server has Started!")
});