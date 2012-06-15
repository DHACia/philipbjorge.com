---
title: Physics Based Graph Drawing
slug: physics-based-graph-drawing-2
url: /{category}/{slug}/index.html
type: portfolio-entry
category: portfolio
title_img_src: https://lh4.googleusercontent.com/-7UHHm-CMd34/T9rUB9d2PZI/AAAAAAAAA7o/B6BWo18rozo/s{img_width}/text_game1.jpg
snippet: A text adventure game with a spring/electron model for graph drawing and a Mario mini-game.
gallery:
 - https://lh4.googleusercontent.com/-7UHHm-CMd34/T9rUB9d2PZI/AAAAAAAAA7o/B6BWo18rozo/s{img_width}/text_game1.jpg
 - https://lh4.googleusercontent.com/-1M09ElV4cJg/T9rUCD2VmUI/AAAAAAAAA7k/bwTcXx9T-3s/s{img_width}/text_game2.jpg
 - https://lh3.googleusercontent.com/-j9SRwAlj92s/T9rUB4nllhI/AAAAAAAAA7g/gjO1uAp2EH4/s{img_width}/text_game3.jpg
date: 2011-06-01
---
##The Project
For my Junior C++ course's final project, we were tasked with extending our text adventure game in whatever direction we wanted. I chose to pursue 2 new graphical features: a graphical map and a mini game reminiscent of Super Mario Bros.

##Mini Game
My main accomplishment in the mini game was implementing my first 2D physics engine. It worked reasonably well for the task, but was not easily extensible or accurate. My second implementation of a similar engine in Slime Volleyball for Android show significant improvement over the initial implementation.

##Map Drawing
For the map drawing, I had to figure out a way to draw the in-game map which was represented as a directed graph. To do this, I implemented a physics-based graph drawing algorithm - each node repelled other nodes and each edge pulled nodes together. It was modeled after electrons and springs. I wrote the algorithm by mixing a few different techniques found in research papers published over the last few decades.

##Future Plans
Graph drawing has since become an interest of mine and I plan on attending the Graph Drawing 2012 conference next year in Redmond. Along with that, I'm also interested in working to parallelize my algorithm to take advantage of modern processors like the Intel i7.