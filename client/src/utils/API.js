/////////////////////////////////////////////////////////
// client/src/utils/API.js                M Jordan
/////////////////////////////////////////////////////////
import axios from "axios";

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
    console.log("API axios.GET(/api/goals/category category "+category)
    return axios.get("/api/goals/category/" + category);
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
