//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

const app = express();

let items = ["Buy Food", "Cook Food", "Eat Food"];
let workItems = [];

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.set("view engine", "ejs");

app.get("/", function (req, res) {
  let day = date.getDate();
  res.render("list", { listTitle: day, newListItems: items });
  //   res.send();
});
app.post("/", function (req, res) {
  let item = req.body.newItem;

  if (req.body.list === "Work List") {
    workItems.push(item);
    res.redirect("/work");
  } else {
    items.push(item);

    res.redirect("/");
  }
});

app.get("/work", function (req, res) {
  res.render("list", { listTitle: "Work List", newListItems: workItems });
});

app.post("/work", function (req, res) {
  let item = req.body.newItem;
  workItems.push(item);
  res.redirect("/work");
});

app.get("/about", function (req, res) {
  res.render("about");
});

app.listen(3000, function () {
  console.log("Server started on port 3000");
});

//   <Another way to solve the date>

// let currentDay = today.getDay();
//   if (currentDay === 5 || currentDay === 6) {
//     day = "Weekend";

//   } else {

//     day = "Weekday";
//   }

//   if (currentDay === 0) {
//     day = "Sunday";
//   } else if (currentDay === 1) {
//     day = "Monday";
//   } else if (currentDay === 2) {
//     day = "Tuesday";
//   } else if (currentDay === 3) {
//     day = "Wedensday";
//   } else if (currentDay === 4) {
//     day = "Thursday";
//   } else if (currentDay === 5) {
//     day = "Friday";
//   } else {
//     day = "Saturday";}

// switch (currentDay) {
//     case 0:
//       day = "Sunday";
//       break;
//     case 1:
//       day = "Monday";
//       break;
//     case 2:
//       day = "Tuesday";
//       break;
//     case 3:
//       day = "Wedensday";
//       break;
//     case 4:
//       day = "Thursday";
//       break;
//     case 5:
//       day = "Friday";
//       break;
//     case 6:
//       day = "Saturday";
//       break;
//     default:
//       console.error("Error: Current day is equal to :" + currentDay);
// }
