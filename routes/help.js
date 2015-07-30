'use strict';

module.exports = initRoute;

function initRoute (app, robot) {
	app.get('/help', function (request, response) {
		response.render('help', {
			commands: robot.helpCommands().map(processHelpCommand.bind(null, robot))
		});
	});
}

function processHelpCommand (robot, rawCommand) {
	var parts = rawCommand.replace(/hubot/ig, robot.name).split('-');
	var name = parts.shift().trim();
	var description = parts.join('-').trim();
	return {
		name: name,
		description: description
	};
}
