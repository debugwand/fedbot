// Description:
//   Summon a flock of pigeons
//
// Commands:
//   hubot flock of pigeons - Summon a flock of pigeons

'use strict';

module.exports = flockOfPigeons;

function flockOfPigeons (robot) {
	robot.respond(/flock of pigeons/i, generateFlock.bind(null, robot));
}

function generateFlock (robot, response) {
	// Frequency of flock members can be loosely controlled be adding multiple
	var flockMembers = [
		' ',
		' ',
		' ',
		':pigeon_left:',
		':pigeon_right:',
		':pigeon_left:',
		':pigeon_right:',
		':sparkles:',
		':pigeon_dance:',
		':pigeon_dance_slow:',
		':pigeon_hop:',
		':pigeon_hop_left:'
	];
	var flockSize = 30;
	var flock = '';

	for (var i = flockSize - 1; i >= 0; i--) {
		flock += flockMembers[Math.floor(Math.random() * flockMembers.length)];
	}

	robot.emit('slack-attachment', {
		message: {
			room: response.message.room
		},
		content: {
			title: 'A flock gathers!',
			text: flock,
			fallback: flock
		}
	});
}
