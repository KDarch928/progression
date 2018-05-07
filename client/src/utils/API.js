/////////////////////////////////////////////////////////
// client/src/utils/API.js                M Jordan
/////////////////////////////////////////////////////////
import axios from "axios";
import ReactS3 from "react-s3";

export default {
  // Gets all goals
  getGoals: function() {
    console.log("API axios.GET(/api/goals")
    return axios.get("/api/goals");
  },
  // Gets the goal with the given id
  getGoal: function(id) {
    console.log("API axios.GET(/api/goal id "+id)
    return axios.get("/api/goals/" + id);
  },
  // Gets the goal with the given id
  getGoalsCategory: function(category) {
    console.log("API axios.GET(/api/goals/category category " + category);
    return axios.get("/api/goals/category" + category);
  },
  // Deletes the goal with the given id
  deleteGoal: function(id) {
    console.log("API axios.DELETE(/api/goals/"+id)
    return axios.delete("/api/goals/" + id);
  },
  // Saves a goal to the database
  saveGoal: function(goalData) {
    console.log("API axios.POST(/api/goals")
    return axios.post("/api/goals", goalData);
  },
  fileUpload: function(fileData) {
    
    axios.get("/api/goals/data", {header:{"Content-Type":"application/json", "Host":"localhost:3001"}})
      .then(data => console.log(data))
      .catch(err => {
        if(err.respsone) {
          console.log(err.respsone.data);
          console.log(err.respsone.status);
          console.log(err.respsone.header)
        } else if (err.request) {
          console.log(err.request);
        } else {
          console.log("Error", err.message);
        }
        console.log(err.config);
      });

    const config = {
      bucketName: "progressionapp",
      region: "us-east-2",
      accessKeyId: "AKIAJWYFYH4AZDO2BKWQ",
      secretAccessKey: "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"
    }

    ReactS3.upload(fileData, config)
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  }
};
