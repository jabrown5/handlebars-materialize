var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Jen' });
});

router.get("/about", function(req, res, next) {
	var self = {
		name: "Jen",
		phone: "419.494.5592",
		email: "jabrown5@gmail.com"
	};
	// response.render() has 2 arguments
	// 1st: template (view)
	// 2nd: an Object w/ data
	res.render("about", self);
});

router.get("/faq", function(req, res, next) {
	var questions = {
		questions: ["Do you like cats?","Do you like dogs?","Want to get some ice-cream?"],
		answers: ["If not, get the F outta here.","You don't know what you're missing if you don't.","YES!!!!"]
	}
	res.render("faq", questions);
});

router.get("/login", function(req, res, next) {
	var user = {
		// name: "Jim",
		password: "banjo",
		hint: "strovia"
	};
	res.render("login", user);

});


module.exports = router;
