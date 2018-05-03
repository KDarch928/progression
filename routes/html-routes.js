var path = require("path");
var authController = require('../controllers/auth_controller.js');

// Routes
// =============================================================
module.exports = function(app, passport) {

    // Each of the below routes just handles the HTML page that the user gets sent to.

    // reserve route loads reserve.html
    app.get("/", authController.home);

    

    // registration route loads signup.html
    app.get("/signup", authController.signup);

    // login loads signin.html
    app.get("/signin", authController.signin);


/*    app.post("/signup", passport.authenticate('local-signup',{
        successRedirect: '/grocery',
        failureRedirect: '/signup'
    }));*/

    //check login against database to re-route
    app.post("/signup", passport.authenticate('local-signup',{failureRedirect: '/signup'}) ,function(req, res){
        res.redirect("/")
        
    })

/*    app.post('/signin', passport.authenticate('local-signin', {
        successRedirect: '/grocery',
        failureRedirect: '/signin'
    }));*/

    //check login against database to reroute
    // app.post("/signin", passport.authenticate('local-signin',{failureRedirect: '/signin'}) ,function(req, res){

    //     console.log(req.user.usertype);
    //     if(req.user.usertype === 'grocery'){
    //         //res.redirect('/grocery/' + req.user.username);
    //         res.redirect('/grocery/' + req.user.username);
    //     }
    //     else{
    //         res.redirect('/pantry/' + req.user.username);
    //     }
    // })

    // app.get("/logout", authController.logout);


    function isLoggedIn(req, res, next){
        if(req.isAuthenticated())
            return next();
        res.redirect('/signin');
    }

    // // grocery route loads grocery.html
    // app.get("/grocery/:username?", isLoggedIn, authController.grocery);

    // // pantry route loads pantry.html where pantry can select groceries to reserve
    // app.get("/pantry/:username?", isLoggedIn, authController.pantry);

    // // pantry route loads pantryReserved.html where they will view their reserved groceries
    // app.get("/pantryReserved/:username?", isLoggedIn, authController.pantryReserved);


};
