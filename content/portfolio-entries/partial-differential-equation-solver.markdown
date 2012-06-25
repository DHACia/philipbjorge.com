---
title: Partial Differential Equation Solver
slug: partial-differential-equation-solver
url: /{category}/{slug}/index.html
type: portfolio-entry
category: portfolio
snippet: A parallel, multigrid PDE solver.
title_img_src: https://lh6.googleusercontent.com/-j6M5rE7phWI/T-ebte59HjI/AAAAAAAAA_A/UDVF65JTAEw/s{img_width}/31MB_grid.jpg
gallery:
 - https://lh6.googleusercontent.com/-j6M5rE7phWI/T-ebte59HjI/AAAAAAAAA_A/UDVF65JTAEw/s{img_width}/31MB_grid.jpg
 - https://lh4.googleusercontent.com/-22TJ04JzL_I/T-ecjTJLzqI/AAAAAAAAA_I/Y-GeYKibUrs/s{img_width}/small-grid-slow.jpg
 - https://lh4.googleusercontent.com/-mR_3g9K-DhE/T-ecjzklU9I/AAAAAAAAA_Q/8orlOH_6_50/s{img_width}/news_thumb.png
date: 2011-06-01
---
##The Assignment
For my concurrency course, we were tasked with implementing a PDE solver using multigrid techniques and red-black successive overrelaxation. On this assignment, I learned the importance of refactoring and a very important debugging technique for parallel programs - visualizations. By visualizing my program's output (the rainbow image in the gallery above), I was able to see and diagnose race conditions that couldn't be seen in human-readable datasets.

##The Writeup
We were only required to turn in a working assignment, but I took it a bit further by doing a full 3 part writeup on the techniques used for my blog. I had hoped that the series could be a resource for students trying to wrap their head around these techniques.

[Part 1](http://www.philipbjorge.com/blog/2011-12-01/2d-heat-equation-solver-in-ada95-part-1/)

[Part 2](http://www.philipbjorge.com/blog/2011-12-02/2d-multigrid-red-black-sor-in-ada95-part-2/)

[Part 3](http://www.philipbjorge.com/blog/2012-01-22/2d-multigrid-red-black-sor-in-ada95-part-3/)