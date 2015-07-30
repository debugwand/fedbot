'use strict';

var consolidate = require('consolidate');
var eachModule = require('each-module');
var serveStatic = require('serve-static');

module.exports = router;

function router (robot) {
	var app = robot.router;

	// Set some default view data
	app.locals.robotName = robot.name;
	app.locals.year = (new Date()).getFullYear();

	// View configuration
	app.engine('dust', consolidate.dust);
	app.set('view engine', 'dust');
	app.set('views', __dirname + '/../views');

	// Serve static files
	app.use(serveStatic(__dirname + '/../public'));

	// Load routes
	eachModule(__dirname + '/../routes', function (name, initRoute) {
		initRoute(app, robot);
	});

}
