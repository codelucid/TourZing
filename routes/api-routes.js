const db = require("../models");
module.exports = function (app) {
    // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
    // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
    // otherwise send back an error
    // app.post("/auth/register", function (req, res) {
    //     db.User.create({
    //         firstName: req.body.firstName,
    //         lastName: req.body.lastName,
    //         email: req.body.email,
    //         password: req.body.password
    //     })
    //     res.redirect("/account");
    // });
    // Route for logging user out
    // app.get("/logout", function (req, res) {
    //     req.logout();
    //     res.redirect("/");
    // });
    // app.post("/auth/login", function (req, res) {
    //     db.User.findAll({
    //         firstName: req.body.firstName,
    //         lastName: req.body.lastName,
    //         email: req.body.email,
    //         password: req.body.password
    //     })
    //     res.redirect("/account");
    // });
    // app.get("/account", function (req, res) {
    //     res.render("./views/account.handlebars")
    // });


    // app.post('/tour/signup', function (req, res)  {
// TourSet.create({ 
//   guideFirstName: req.body.guideFirstName,
//   guideLastName: req.body.guideLastName,
//   tourname: req.body.tourName,
//      date: req.body.date,
//      phone: req.body.phone,
//   creditcard: req.body.creditCard
// })
//   res.redirect('/account')
// });
    // GET REQUEST FOR Hello NAME
    // let clientName = await db.User.findAll();
    //   console.log(clientName.every(user => user instanceof User));
    //   console.log("All users:", JSON.stringify(users, null, 2));
    //   // Routes
    //   app.get("/account", function(req, res) {
    //     res.render("account", clientName);
    //   });
    // ---------------------------------------------------------------------------
    // Adding this get with the hopes that it will render the user name
    // after the Hello on the account handlebar page.  Referenced the "handlebarsLunch activity"
    // may need "auth" instead of "api"...
    // but this should be from the database, at this point, I think


    // app.get("/api/user_data", function (req, res) {
    //     res.render("account", {
    //         membername: name
    //     });
    // });
    // app.get("/api/guide_data", function (req, res) {
    //     res.render("account", {
    //         membername: name
    //     });
    // });
    // ---------------------------------------------
    // Tour Guide
    // app.post("/guide/register", function (req, res) {
    //     db.Guide.create({
    //         firstName: req.body.firstName,
    //         lastName: req.body.lastName,
    //         email: req.body.email,
    //         password: req.body.password,
    //         phone: req.body.phone,
    //         country: req.body.country,
    //         city: req.body.city,
    //         tour: req.body.tour,
    //         cost: req.body.cost
    //     })
    //     res.redirect("/account");
    // });
    // app.get("/account", function (req, res) {
    //     res.render("./views/account.handlebars")
    // });
    // app.post("/guide/login", function (req, res) {
    //     db.Guide.findAll({
    //         firstName: req.body.firstName,
    //         lastName: req.body.lastName,
    //         email: req.body.email,
    //         password: req.body.password
    //     })
    //     res.redirect("/account");
    // });

    // --------------------------------------------
    // Search Bar

    app.get("/guide/search", function (req, res) {
        console.log("/guide/search")
        var searchGuide = [];

        db.Guide.findOne({

            guideReturn: {
                firstName: req.params.firstName,
                city: req.params.city
            }

        })
            .then(function () {
                searchGuide.push(guideReturn);
                console.log(searchGuide, "ANYTHING");

                res.json(guideReturn)
               //  res.render("search", searchGuide);
            })
        // app.get("/guide/search", function (req, res) {
        //     for (var i = 0; i < icecreams.length; i++) {
        //         if (icecreams[i].name === req.params.name) {
        //             return res.render("search", icecreams[i]);
        //         }
        //     }
        // });

        // app.get("/guide/searchResult", function (req, res) {
        //     res.render("search", { search: searchGuide });
        // });


        // for (var i = 0; i < guides.length; i++) {

        // return res.render("search", guides[i]);

        // }
        // });
    });
};