/////////////////////////////////////////////////////////
// client/src/utils/API.js                M Jordan
/////////////////////////////////////////////////////////
import axios from "axios";
import ReactS3 from "react-s3";

export default {
  // Gets all goals
  getGoals: function(params) {
    console.log("API getGoals axios.GET(/api/goals ")
      axios.get("/api/goals")
      .then(data => {
        console.log(data)
        return data
      })
      .catch(err => {
        if(err.response) {
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.header)
        } else if (err.request) {
          console.log(err.request);
        } else {
          console.log("Error", err.message);
        }
      });
  },
  // Gets the goal with the given id
  getGoal: function(id) {
    console.log("API axios.GET(/api/goal/"+id)
    axios.get("/api/goals/" + id)
      .then(data => {
        console.log(data)
        return data
      })
      .catch(err => {
        if(err.response) {
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.header)
        } else if (err.request) {
          console.log(err.request);
        } else {
          console.log("Error", err.message);
        }
      });
    //return axios.get("/api/goals/" + id);
  },
  // Gets the goal with the given id
  getGoalsCategory: function(category) {
    console.log("API axios.GET(/api/goals/category category " + category);
   axios.get("/api/goals/category/"+category)
      .then(data => {
        console.log(data)
        return data
      })
      .catch(err => {
        if(err.response) {
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.header)
        } else if (err.request) {
          console.log(err.request);
        } else {
          console.log("Error getGoalsCategory ", err.message);
        }
      });
  },
    // Gets the goals with the given user
  getGoalsUser: function(user) {
    console.log("API axios.GET(/api/goals/user/" + user);
    axios.get("/api/goals/user/"+user)
      .then(data => {
        console.log(data)
        return data
      })
      .catch(err => {
        if(err.response) {
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.header)
        } else if (err.request) {
          console.log(err.request);
        } else {
          console.log("Error getGoalsUser ", err.message);
        }
      });
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
  }
};
