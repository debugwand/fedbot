// Description:
//   Jude images!
//
// Commands:
//   hubot judehoff - Get a Judehoff

'use strict';

module.exports = initScript;

function initScript (robot) {
	robot.hear(/\bjudehoff\b/i, showTheHoff);
}

function showTheHoff (message) {
	message.send('http://i.imgur.com/Tfq7Bi7.gif');
}