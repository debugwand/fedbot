// Description:
//   You had better shut the fuck up in #pull-requests

'use strict';

module.exports = policePullRequests;

function policePullRequests (robot) {
	robot.hear(/.*/, function (response) {

		var room = response.message.user.room;
		var username = response.message.user.name;
		var message = response.message.text;

		if (room === 'pull-requests' && isPullRequestSpam(message)) {
			robot.messageRoom(
				username,
				':crab: *STOP SPAMMING THE PULL REQUESTS ROOM! IT\'S FOR PULL REQUESTS ONLY!* :crab:',
				response.random([
					'http://image.blingee.com/images19/content/output/000/000/000/7c7/804680749_1437873.gif',
					'http://media.giphy.com/media/hV00EhgUDsxqw/giphy.gif',
					'http://media.giphy.com/media/iQbUZdceDtKRG/giphy.gif',
					'http://stashpit.com/upload/big/2015/02/12/54dce9b265379.gif',
					'http://www.davesfiles.com/Random/Gifs/dance-spam-lg1.gif',
					'https://community2.tablotv.com/uploads/default/153/096b229aa824c07c.gif'
				])
			);
		}

	});
}

function isPullRequestSpam (message) {
	return !/https?:\/\/(www\.)?github\.com\/[a-z0-9_\-]+\/[a-z0-9_\-]+\/pull\//i.test(message);
}
