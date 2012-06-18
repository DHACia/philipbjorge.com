<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Philip Bjorge</title>
  <meta name="author" content="Philip Bjorge">
  <meta name="description" content="{{ page.excerpt }}">
  <meta name="HandheldFriendly" content="True">
  <meta name="MobileOptimized" content="320">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <!--[if IE]> <script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script> <style type="text/css"> .clear { zoom: 1;display: block;} </style> <![endif]-->
  <link rel="canonical" href="http://www.philipbjorge.com">
  <link href="favicon.ico" rel="icon">
  <link href='http://fonts.googleapis.com/css?family=Arvo|PT+Sans' rel='stylesheet' type='text/css'>
  <link href="/css/screen.css" media="screen, projection" rel="stylesheet" type="text/css">
  <link rel="stylesheet" href="/css/print.css" type="text/css" media="print" />
  <link href="/css/style-my-tooltips.css" rel="stylesheet" type="text/css" />
  <link rel="stylesheet" type="text/css" href="/css/isotope.css">
  <link rel="stylesheet" type="text/css" href="/css/networks.css">
  
  <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js" type="text/javascript"></script>
  <script src="/js/jquery.timeago.js" type="text/javascript"></script>
  <script src="/js/jquery.isotope.min.js"></script>
  <script src="/js/jquery.infinitescroll.min.js"></script>
  <script src="/js/jquery.style-my-tooltips.js" type="text/javascript"></script>
  <script>
    $().ready(function() {
      $(".gsc-clear-button").live('click', function() {
		$("#search-panel").removeClass("visible");
	  });
	  $("#close-search-panel").live('click', function() {
		$(".gsc-clear-button").click();
	  });
	  if ($("time").length)
		$("time").timeago();
      $("[title]:not(.social-item)").style_my_tooltips({
        tip_follows_cursor: "off", //on/off
        tip_delay_time: 750 //milliseconds
      });
    });
	$(window).load(function(){
      var $container = $('#social-container');
    
      $container.isotope({
        itemSelector : '.social-item',
		animationEngine : 'best-available',
        animationOptions : {
            duration: 750,
            easing: 'linear',
            queue: false
        },
		getSortData: {
			time: function( $elem ) {
				return $elem.find('time').attr('datetime');
			}
		},
		sortBy: 'time',
		sortAscending: false
      });
	  
	  $("#new-content").load('update_stream.php', function() {
		$container.isotope('insert', $(this).children('.social-item'));
		$("time").timeago();
	  });
	  
	  if ($("time").length)
		$("time").timeago();
      
      $container.infinitescroll({
        navSelector  : '#social-nav',    // selector for the paged navigation 
        nextSelector : '#social-nav a',  // selector for the NEXT link (to page 2)
        itemSelector : '.social-item',     // selector for all items you'll retrieve
		bufferPx : 200,
		debug: true,
        loading: {
            finishedMsg: 'No more pages to load.',
            img: 'images/loader.gif'
          }
        },
        // call Isotope as a callback
        function( newElements ) {
			var $newElems = $(newElements);
			$newElems.imagesLoaded(function(){
				$container.isotope('appended', $newElems );
				$("time").timeago();
			});
        }
      );
	  
    });
  </script>
</head>
<body>
  <div class="headerColumn print_hide">
    <header role="banner"><hgroup>
      <h1>
        <a href="http://www.philipbjorge.com/">
            Philip Bjorge
        </a>
      </h1>
    </hgroup></header>

    <nav role="navigation">
        <ul class="main-navigation">
          <li><a href="/">Me</a></li>
          <li><a href="/blog/">Blog</a></li>
          <li><a href="/portfolio/">Portfolio</a></li>
          <li><a href="http://careers.stackoverflow.com/philipbjorge">Resume / CV</a></li>
          <li><a href="/contact/" class="emailLink">Contact Me!</a></li>
        </ul>
    </nav>
	
	<div id="cse-search-form" style="width: 100%;">Loading</div>
	<script src="http://www.google.com/jsapi" type="text/javascript"></script>
	<script type="text/javascript"> 
	  google.load('search', '1', {language : 'en', style : google.loader.themes.MINIMALIST});
	  google.setOnLoadCallback(function() {
		var customSearchOptions = {};  var customSearchControl = new google.search.CustomSearchControl(
		  '000017088595631691019:zqtswshnvca', customSearchOptions);
		customSearchControl.setResultSetSize(google.search.Search.SMALL_RESULTSET);
		customSearchControl.setSearchCompleteCallback(this, function() {
		    $("#search-panel").addClass("visible");
		});
		var options = new google.search.DrawOptions();
		options.setSearchFormRoot('cse-search-form');
		customSearchControl.draw('cse', options);
	  }, true);
	</script>

    <footer role="social">
        <h2>My Social</h2>
        <ul>
			<li><a href="https://www.facebook.com/philip.bjorge"><img src="/images/icons/facebook.png" width="48" height="48" alt="github" title="Friend me on facebook!" /></a></li>
            <li><a href="https://github.com/philipbjorge/"><img src="/images/icons/github.png" width="48" height="48" alt="github" title="Follow me on github!" /></a></li>
            <li><a href="http://www.gplus.to/PhilipBjorge"><img src="/images/icons/googleplus.png" width="48" height="48" alt="google plus" title="Check out my Google Plus!" /></a></li>
			<li><a href="http://statigr.am/philipbjorge"><img src="/images/icons/instagram.png" width="48" height="48" alt="instagram" title="View my photos on instagram!" /></a></li>
            <li><a href="http://www.linkedin.com/in/philipbjorge"><img src="/images/icons/linkedin.png" width="48" height="48" alt="linked in" title="Connect with me on Linked In!" /></a></li>
            <li><a href="http://www.pinterest.com/philipbjorge/"><img src="/images/icons/pinterest.png" width="48" height="48" alt="pinterest" title="Follow my pins!" /></a></li>
			<li><a href="http://www.reddit.com/user/philipbjorge"><img src="/images/icons/reddit.png" width="48" height="48" alt="github" title="Upvote me on reddit!" /></a></li>
            <li><a href="http://stackoverflow.com/users/1139340/philip-bjorge"><img src="/images/icons/stackoverflow.png" width="48" height="48" alt="stack overflow" title="Read my stackoverflow answers!" /></a></li>
            <li><a href="https://twitter.com/#!/philipbjorge"><img src="/images/icons/twitter.png" width="48" height="48" alt="twitter" title="Follow me on twitter!" /></a></li>       
		</ul>
    </footer>
  </div>

  <div class="mainColumn">
    <div class="blog-index height_hack">
	  <h1>My Social Wall <a href="https://github.com/philipbjorge/Infinite-Social-Wall">(on github)</a></h1>
	  <div id="search-panel">
		<span id="close-search-panel"><a href="javascript:void(0)">Close Search Results</a><img src="/images/close.png" /></span>
	    <div id="cse"></div>
	  </div>
	  <div id="social-container" class="variable-sizes clearfix infinite-scrolling">
		<?php require_once('get_stream.php'); ?>
	  </div>
	  <div id="new-content"></div>
	</div>
  </div>
  <script src="/js/app.js" type="text/javascript"></script>
</body>
</html>