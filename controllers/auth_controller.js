var path = require("path");
var exports = module.exports = {};


exports.home = function(req,res){
	res.redirect('/');
}



exports.signup = function(req,res){
	//res.render('signup');
	res.render('/signup');
}

exports.login = function(req,res){
	//res.render('signin');
	res.redirect('/login');
}


