'use strict';

module.exports = initRoute;

var swearJar = require('../scripts/swear-jar');

function initRoute (app, robot) {
	app.get('/swear-jar', function (request, response) {
		response.render('swear-jar', {
			total: swearJar.getValue(robot),
			totalByName: swearJar.getValueByName(robot),
			totalByWord: swearJar.getValueByWord(robot)
		});
	});
}
