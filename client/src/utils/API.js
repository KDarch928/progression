
import axios from 'axios';

export default {
	signup: function() {
		return axios.get('/signup');
	},

	login: function() {
		return axios.get('/login');
	},

	submitSignup: function(userInfo) {
		// this will respond with error if there was an error
        // or respond with registered if registered.
        console.log("submit"+userInfo)
		return axios.post('/signup', userInfo)
			.then(function (response) {
				console.log("api"+ response.data);
				return response.data;
			})
			.catch(function (error) {
                console.log(error);
                console.log("error1")
			});
	},

	submitLogin: function(LoginInfo) {
		return axios.post('/login', LoginInfo)
			.then(function (response) {
				console.log(response);
				console.log('hitting login');
				return response.data;
			})
			.catch(function (error) {
				console.log(error);
				console.log('error at login');
			});
	},

	Logout: function(LoginInfo) {
		return axios.get('/logout')
			.then(function (response) {
				console.log(response);
				console.log('hitting logout');
			})
			.catch(function (error) {
				console.log(error);
				console.log('error at logout');
			});
    },
    
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
    //   getGoalsCategory: function(id) {
    //     console.log("API axios.GET(/api/goals/category category "+category)
    //     return axios.get("/api/goals/category" + category);
    //   },
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

