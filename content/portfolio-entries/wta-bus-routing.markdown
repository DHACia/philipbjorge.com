---
title: WTA Bus Routing
slug: wta-bus-routing-2
url: /{category}/{slug}/index.html
type: portfolio-entry
category: portfolio
title_img_src: https://lh3.googleusercontent.com/-MQdKbz9JxyM/T9q487aHFbI/AAAAAAAAA7M/I1qiSEdqQrg/s{img_width}/1-Hour-WTA-Routes.png
snippet: A command-line route planning application for Bellingham's bus system.
gallery:
 - https://lh3.googleusercontent.com/-MQdKbz9JxyM/T9q487aHFbI/AAAAAAAAA7M/I1qiSEdqQrg/s{img_width}/1-Hour-WTA-Routes.png
date: 2011-01-01
---
##The Project
I became frustrated with the lack of a transit planner in Bellingham and decided to code up a proof of concept in Python.

##Initial Setback
My original idea was to simply run Dijkstra's Shortest Path algorithm on the graph, but I quickly realized that this wouldn't work as the edge weights changed based on when you arrive at a stop. Essentially, the issue was that while the edge weights remained constant, I'd have to incorporate the amount of time waited at each stop into the edge weight (which depended on when you got to a node). Dynamic algorithms would not work.

##Randomly Finding Bus Routes???
My next idea was to do it via the Monte Carlo method - randomly. Essentially, my algorithm sends out 1000 bus riders who flip a coin at each stop - heads they stay on the bus and tails they get off and try another one. When all the bus riders finish, the routes are ranked according to the time they take and the top 3 are displayed.
Because the algorithm is based on chance, it doesn't guarantee any results. But it returns good results around 90% of the time and reasonably quickly on modern hardware (~5 seconds).

##Applications and Future Plans
Interestingly enough, days after I finished my proof of concept an article ran in the WWU paper about how WTA had contracted out a transit planning application. Unfortunately, it had gone over its 5 million dollar budget, hadn't met the deadline, and has permanently locked WTA to this vendor.
In the future, I may revisit this project to experiment with evolutionary algorithms. This seems to be the algorithmic technique that research suggests is most promising for finding solutions to the problem of transit planning.