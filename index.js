import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import path from "path";
import cors from "cors";

//------------------------------- Set up ------------------------------------

// Express.js set up
const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(express.static("public"));
app.use(express.json());

// Database set up
mongoose.connect("mongodb://localhost:27017/todolistDB", {
  useNewUrlParser: true,
});
const itemSchema = new mongoose.Schema({
  name: String,
});
const Item = mongoose.model("Item", itemSchema);

const archivedItemSchema = new mongoose.Schema({
  name: String,
});
const ArchivedItem = mongoose.model("ArchivedItem", archivedItemSchema);

//------------------------------- Get a real time date ------------------------
function getCurrentDate() {
  const options = { year: "numeric", month: "long", day: "numeric" };
  const currentDate = new Date().toLocaleDateString(undefined, options);
  return currentDate;
}

const formattedDate = getCurrentDate();

//------------------------------- Routers -----------------------------------------------

app.get("/", async (req, res) => {
  try {
    // Fetch both regular and archived tasks
    const regularTasks = await Item.find({});
    const archivedTasks = await ArchivedItem.find({});

    res.json({
      taskCreated: regularTasks,
      archivedTasks: archivedTasks,
      date: formattedDate,
    });
  } catch (error) {
    console.error("Error fetching tasks:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.post("/submit", async (req, res) => {
  try {
    // Receive the request from the user and trim whitespace
    const taskName = req.body.task.trim();

    // create task object
    const task = new Item({
      name: taskName,
    });

    // Check if the user's input is empty
    // if empty, send an error response
    // otherwise, save the input to the database
    if (task.name.length === 0) {
      res.status(400).json({ error: "Please enter something." });
    } else {
      await task.save();
      res.json({ success: true });
    }
  } catch (error) {
    console.error("Error adding task:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Add new route for deleting tasks
app.delete("/delete/:taskName", async (req, res) => {
  try {
    const taskName = req.params.taskName;

    // Use the appropriate model (Item) for your task schema
    await Item.deleteOne({ name: taskName });

    res.json({ success: true });
  } catch (error) {
    console.error("Error deleting task:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.post("/archive", async (req, res) => {
  try {
    const archivedTaskName = req.body.task.trim();

    const archivedTask = new ArchivedItem({
      name: archivedTaskName,
    });

    if (archivedTask.name.length === 0) {
      res.status(400).json({ error: "Invalid archived task." });
    } else {
      await archivedTask.save();
      res.json({ success: true });
    }
  } catch (error) {
    console.error("Error archiving task:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Add new route for unarchiving tasks
app.post("/unarchive", async (req, res) => {
  try {
    const unarchivedTaskName = req.body.task.trim();
    // Use the appropriate model (Item) for your task schema
    const unarchivedTask = new Item({
        name: unarchivedTaskName,
      });

    // Use the appropriate model (ArchivedItem) for your archived task schema
    await ArchivedItem.deleteOne({ name: unarchivedTaskName });
    await unarchivedTask.save();
    

    res.json({ success: true });
  } catch (error) {
    console.error("Error unarchiving task:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
