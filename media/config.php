<?php

ini_set('display_errors',0);
ini_set('display_startup_errors',0);  
error_reporting(0);
header('Content-type:text/html; charset=utf-8');

// RSS Feeds ("APIs")
$apis = array(
	"google-plus" => array(
		"user" => "111577025166114857734",
		"url" => "http://gplus-to-rss.appspot.com/rss/{USER}"
	),
	"github" => array(
		"user" => "philipbjorge",
		"url" => "http://atom2rss.semiologic.com/?atom=https://github.com/{USER}.atom"
	),
	"pinterest" => array(
		"user" => "philipbjorge",
		"url" => "http://pinterest.com/{USER}/feed.rss"
	),
	"twitter" => array(
		"user" => "philipbjorge",
		"url" => "http://twitter.com/statuses/user_timeline/{USER}.rss"
	),
	"stackoverflow" => array(
		"user" => "1139340",
		"url" => "http://stackoverflow.com/feeds/user/{USER}"
	),
	"reddit" => array(
		"user" => "philipbjorge",
		"url" => "http://www.reddit.com/user/{USER}/.rss"
	),
	"instagram" => array(
		"user" => "philipbjorge",
		"url" => "http://statigr.am/feed/{USER}"
	),
	"philipbjorge" => array(
		"url" => "http://www.philipbjorge.com/feed.rss"
	)
);

// MySQL Connection
$mysqli = new mysqli("localhost", "root", "", "infinite_social_wall");
$mysql_table = "archived_social_items";

// "Pagination" settings
$results_per_page = 20;

?>