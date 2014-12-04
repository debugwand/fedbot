# Description:
#   Boo image when someone types 'boo' or variation thereof, or implies meetings rage
#
# Commands:
#   none
#

createImageListPage = require './helpers/http-image-list'

module.exports = (robot) ->

  responses = [
    'http://i0.wp.com/www.chinasmack.com/wp-content/uploads/2008/12/iraqi-journalist-throws-shoes-to-president-bush.gif'
    'http://i.imgur.com/gxuM60O.gif'
    'http://images.amcnetworks.com/ifc.com/wp-content/uploads/2013/09/tumblr_mhgtjjMYnS1ql48n2o1_250.gif'
    'http://wandervogeldiary.files.wordpress.com/2013/12/tumblr_ma0agdgzb81r3p7kmo1_500.gif'
    'http://i.cr3ation.co.uk/dl/s1/gif/madwesthambird.gif'
    'http://therepublikofmancunia.com/wp-content/uploads/2009/09/fanscity.gif'
    'http://i.imgur.com/YK6J4.gif'
    'http://cdn.niketalk.com/2/22/22fb404f_boo-google-boo.gif'
    'http://www.totalprosports.com/wp-content/uploads/2013/03/unhappy-iowa-state-fan-college-basketball-fan-gifs.gif'
    'http://www.crushable.com/wp-content/uploads/2013/08/Lady-Gaga-VMAs.gif'
    'http://i.imgur.com/PDuXRnX.gif'
    'http://i619.photobucket.com/albums/tt279/Minimanolo/wlaf6c.gif'
  ]

  robot.hear /\b(bo{2,}!?)\b/i, (msg) ->
    msg.send msg.random responses

  robot.hear /\b(meetings? about agile)\b/i, (msg) ->
    msg.send msg.random responses

  createImageListPage(
    robot,
    '/boo',
    'Boo images',
    'A list of all the boo images:',
    responses
  )
