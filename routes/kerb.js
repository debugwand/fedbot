'use strict';

module.exports = initRoute;

var kerb = require('../scripts/kerb');

function initRoute (app) {
	app.get('/kerb', function (request, response, next) {
		kerb.getData(function (error, days) {
			if (error) {
				return next(error);
			}
			response.render('kerb', {
				days: days
			});
		});
	});
}
