---
title: The New Site
datetime: 2012-06-24 01:03:11
type: entry
category: blog
title_img_src: https://lh5.googleusercontent.com/-sntcjMNI_zY/T9qLDX6Rb9I/AAAAAAAAA7A/32MyUpSX3bo/s{img_width}/984423_25566484.jpg
snippet: A quick overview of the new website and why I did it...
---
**Welcome** to the new PhilipBjorge.com. For the upgrade, I wanted to:

  * support mobile devices with a responsive layout.
  * reduce the friction of publishing content.
  * better leverage social media.
  * have a blazing fast page load times.

## Responsive Design
I accomplished this goal using media queries, em-based font sizes, and percentage-based widths. There are a few more bugs left to be squashed, but in general the site functions and looks equally good on phones, tablets, and desktops.

![mobile iphone version](https://lh3.googleusercontent.com/-_u16KavlHpA/T-bNgHVEBbI/AAAAAAAAA-k/qMONo1Z9jpM/s0/iphone.JPG "iphone version of philipbjorge.com")

## Less Friction
I stopped blogging a couple months ago because it took me just as much time to publish posts as it did to actually write them. Dealing with wordpress's overly complex publishing interface, media management system, and content types became too much of a time sink for my liking.

Blog posts are now written in markdown and statically generated using [Wok](https://github.com/mythmon/wok), a python static site generator (which was the inspiration for this blog post's title image). Although there are many similar generators, Wok drew me in with the simplicity of creating multiple content types and it's wonderful combination of components - [Markdown](http://daringfireball.net/projects/markdown/) for content rendering, [Jinja2](http://jinja.pocoo.org/) for templates, and [YAML](http://www.yaml.org/) for page metadata.

## Social Media
I was a bit late to the social media scene, but I've tried to make up ground with an innovative new homepage. Infinite Social Wall saves nearly all my social media posts and displays them in an intuitive, fun way on my homepage. I think this social wall will give people a better understanding of me than any self-written bio ever could. The project has been released on [github](https://github.com/philipbjorge/Infinite-Social-Wall) in its current alpha state. Feel free to add issues, fork the code, or use it on your own sites (I'd love to see it if you use it!).

## Blazing Fast
Because Wok generates static HTML, it's extremely efficient to serve as no content needs to be dynamically generated - this shows in the page load times.

![661ms load time](https://lh5.googleusercontent.com/-qk3W9zC6sSc/T-bII3i_u-I/AAAAAAAAA-Y/5il1tS3wP_c/s0/speedtest.jpg "pingdom tools speed test")