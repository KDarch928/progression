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
	}
};