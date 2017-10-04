var express     = require("express"),
    app         = express(),
    bodyParser  = require("body-parser"),
    mongoose    = require("mongoose")

mongoose.connect("mongodb://localhost/yelp_camp")
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

// Schema setup
var campgroundSchema = new mongoose.Schema({
   name: String,
   image: String,
   description: String
});

var Campground = mongoose.model("Campground", campgroundSchema);

Campground.create(
    {
        name: "Bowser Point", 
        image: "https://farm3.staticflickr.com/2353/2069978635_2eb8b33cd4.jpg",
        description: "Watch out for Bowser!"
        
    }, 
    function(err, campground){
        if(err){
            console.log(err);
        } else {
            console.log("Newly created campground: ");
            console.log(campground);
        }
    });


app.get("/", function(req, res){
    res.render("landing");
});

//INDEX - show all campgrounds
app.get("/campgrounds", function(req, res){
    // Get all campgrounds from DB
    Campground.find({}, function(err, allCampgrounds){
        if(err){
            console.log(err);
        } else {
            res.render("campgrounds", {campgrounds: allCampgrounds});
        }
    });
});

//CREATE - add new campground to database
app.post("/campgrounds", function(req, res){
    // get data from form and add to campgrounds appray
    var name = req.body.name;
    var image = req.body.image;
    var newCampground = {name: name, image: image}
    // Create new campground and save to DB
    Campground.create(newCampground, function(err, newlyCreated){
        if(err){
            console.log(err);
        } else {
            res.redirect("/campgrounds");
        }
    });
});

//NEW - show form to create new campground
app.get("/campgrounds/new", function(res,res){
    res.render("new");
});

app.get("/campgrounds/:id", function(req, res){
    //find the campground with provided ID
    //render show template with that campground
    res.send("This will be the show page");
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("YelpCamp Server has Started!")
});