# Description:
#   Ballmer GIFs for all
#
# Commands:
#   hubot ballmer me - Get a random Ballmer image
#

module.exports = (robot) ->

  images = [
    "http://stream1.gifsoup.com/webroot/animatedgifs5/2581610_o.gif",
    "http://img.gawkerassets.com/img/18sjypnc1wiifgif/ku-xlarge.gif",
    "http://www.bobborries.com/Funnies/Ballmer.gif",
    "http://microsoft-news.com/wp-content/uploads/2012/10/ballmerngates_thumb.gif",
    "http://i.somethingawful.com/u/Viconia/Ballmer/google_tiny_pieces.gif",
    "http://www.1851project.com/wp-content/uploads/2013/12/Steve1.gif",
    "http://info.abril.com.br/noticias/blogs/omg/files/2013/10/ballmer-evil.gif",
    "http://cdn.gifbay.com/2013/09/steve_ballmer-88323.gif",
    "http://cdn1.akamai.coub.com/coub/simple/cw_gif_big/029fe852893/5ad0e2530599f309a422d/1386334973_o0l5hd_1essxamo.gif"
  ]

  robot.respond /ballmer me/i, (msg) ->
    msg.send msg.random images
