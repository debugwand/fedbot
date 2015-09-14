// Description:
//   Get greetings from Hubot when he enters the room

'use strict';

module.exports = greetings;

function greetings (robot) {
	robot.messageRoom('general', randomHello());

	function exitHandler () {
		robot.messageRoom('general', randomGoodbye());
		setTimeout(function () {
			process.exit();
		}, 1000);
	}
	process.on('exit', exitHandler);
	process.on('SIGINT', exitHandler);
}

function randomHello () {
	return randomValue([
		'I\'m back!',
		'Hello FEDs :)',
		'Daddy\'s home!',
		'Yo yo yo! What\'s goin\' down?',
		'Hey, what did I miss?',
		'FEDbot is BACK IN THE HOUSE'
	]);
}

function randomGoodbye () {
	return randomValue([
		'I\'m bored of you lot. Restart me when you get interesting',
		'I need my beauty sleep, laters',
		'INITIATING SHUT DOWN PROCEDURE',
		'Bye FEDs, be good while I\'m gone',
		'FEDbot out! _drops the mic_',
		'Goodbye cruel world!'
	]);
}
