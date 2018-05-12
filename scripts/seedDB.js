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
    date:  '2018/03/01 08:00', 
    guser: 'Mary',
    goal: 'increase water',
    gcategory: 'Nutrition',
    gpercent: 0
   },
  {
    date:  '2018/03/03 09:00',
    guser: 'Mary',
    goal: 'increase water',
    gcategory: 'Nutrition',
    gpercent: 2
  },
    {
    date:  '2018/03/05 11:00', 
    guser: 'Mary',
    goal: 'increase water',
    gcategory: 'Nutrition',
    gpercent: 4
   },
  {
    date:  '2018/03/06 9:30',
    guser: 'Mary',
    goal: 'Walk 5 miles',
    gcategory: 'Fitness',
    gpercent: 6
  },
   {
    date:  '2018/04/01 08:00', 
    guser: 'Angela',
    goal: 'More water!',
    gcategory: 'Fitness',
    gpercent: 0
   },
  {
    date:  '2018/04/03 09:00',
    guser: 'Angela',
    goal: 'increase daily exercise!',
    gcategory: 'Fitness',
    gpercent: 3
  },
    {
    date:  '2018/04/05 11:00', 
    guser: 'Angela',
    goal: 'increase daily exercise!',
    gcategory: 'Fitness',
    gpercent: 5
   },
  {
    date:  '2018/04/06 9:30',
    guser: 'Angela',
    goal: 'increase daily exercise!',
    gcategory: 'Fitness',
    gpercent: 7
  }
];
const CategoriesSeed = [
  {
    catDesc: 'Nutrition'
  },
  {
    catDesc: 'Fitness'
  },
  {
    catDesc: 'Study'
  }
];

db.Goals
  .remove({})
  .then(() => db.Goals.collection.insertMany(goalsSeed))
  .then(data => {
    console.log("Goal records inserted!");
    //process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });


db.Categories
  .remove({})
  .then(() => db.Categories.collection.insertMany(CategoriesSeed))
  .then(data => {
    console.log("Categories records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
