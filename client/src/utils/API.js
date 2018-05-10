
import axios from 'axios';
import ReactS3 from "react-s3";
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
        
        axios.get("/api/getdata")
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
}


