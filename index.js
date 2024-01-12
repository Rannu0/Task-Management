import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import path from "path";
import cors from "cors";

//------------------------------- Set up ------------------------------------

// Express.js set up
const app = express();
const port = 3000;
app.use(cors());
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

// Database set up
mongoose.connect("mongodb://localhost:27017/todolistDB", { useNewUrlParser: true });   
const itemSchema = new mongoose.Schema ({
    name: String,
});
const Item = mongoose.model('Item', itemSchema);

//------------------------------- TEST -------------------------
app.get('/test', (req, res) => {
    res.send("Connected to express");
});

  














//------------------------------- Get a real time date ------------------------
function getCurrentDate() {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const currentDate = new Date().toLocaleDateString(undefined, options);
    return currentDate;
  }
  
const formattedDate = getCurrentDate();



//------------------------------- Academic Page (main) -------------------------
app.get("/", (req, res) => {
    Item.find({}).then(function(foundItems){
        res.render("index.ejs", {
            taskCreated : foundItems,
            date : formattedDate,
        });
      })
      .catch(function(err){
        console.log(err);
      });   
})

app.post("/submit", (req, res) => {
    // Receive the request from the user and trim whitespace
    const taskName = req.body["Task"].trim(); 
    // create task object
    const task = Item({
        name: taskName,
    });

    // Check if the user's input is empty
    // if empty, alert user
    // otherwise, save the input to database
    if (task.name.length === 0) {
        res.render("index.ejs", {
            alertMessage: "Please enter something.",
            date : formattedDate,
        });
    } else {
        task.save();
        res.redirect("/");
    }
})


//------------------------------- Get router for Career and Lifestyle --------------------------------
app.get("/:page", (req, res) =>{
    const page = req.params.page;   // get url parameter (i.e. career, lifestyle)
    const ejsName = page + ".ejs";  // create ejs file name corresponding to the parameter

    // If user is getting a page other than the main page 
    // create corresponding collection and scheme
    // render corresponding ejs file
    if(page != "main.css"){
        const Page = mongoose.model(page, itemSchema);
        Page.find({}).then(function(foundItems){
            res.render(ejsName, {
                taskCreated : foundItems,
                date : formattedDate,
            });
          })
          .catch(function(err){
            console.log(err);
          }); 

    // user is requesting the main page, direct to main page
    } else {
        res.redirect("/");
    }

})

//------------------------------- Post request for Career and Lifestyle page--------------------------------
app.post("/:page/submit", (req, res) =>{
    const page = req.params.page;
    const collName = page + "s";
    const ejsName = page + ".ejs";
    const urlPath = "/" + page;

    // trim task content 
    const taskContent = req.body["Task"].trim();
    
    if(page != "main.css"){
        const Page = mongoose.model(page, itemSchema);
        const task = Page({
            name: taskContent,
        });
        if (task.name.length === 0) {
            res.render(ejsName, {
                alertMessage: "Please enter something.",
                date : formattedDate,
            });
        } else {
            task.save();
            res.redirect(urlPath);  // After saving the task, user is redirected.
        }
    // user is requesting the main page, direct to main page
    } else {
        Item.find({}).then(function(foundItems){
            res.render("index.ejs", {
                taskCreated : foundItems,
                date : formattedDate,
            });
          })
          .catch(function(err){
            console.log(err);
          });   
        res.redirect("/");
    }

})


app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
  
