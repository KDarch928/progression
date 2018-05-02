const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// inserts below

// Connect to the Mongo DB
mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/progressiondb"
);

const goalsSeed = [
  {
    date:  '2018/01/01 08:00', 
    guser: 'Mary',
    goal: 'increase water',
    gcategory: 'nutrition',
    gpercent: 0
   },
  {
    date:  '2018/01/03 09:00',
    guser: 'Mary',
    goal: 'increase water',
    gcategory: 'nutrition',
    gpercent: 2
  },
    {
    date:  '2018/01/05 11:00', 
    guser: 'Mary',
    goal: 'increase water',
    gcategory: 'nutrition',
    gpercent: 4
   },
  {
    date:  '2018/01/06 9:30',
    guser: 'Mary',
    goal: 'increase water',
    gcategory: 'nutrition',
    gpercent: 6
  }
];

db.Goals
  .remove({})
  .then(() => db.Goals.collection.insertMany(goalsSeed))
  .then(data => {
    console.log("records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
