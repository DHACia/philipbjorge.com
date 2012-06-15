$(document).ready(function(){
    var LD = new LDCOM();
    LD.init();
});

LDCOM = function(){
}

LDCOM.prototype.init = function(){
  this.resizeUI();
  $(window).on('resize', this.resizeUI);
}

var doit;
LDCOM.prototype.resizeUI = function(){
  var winHeight = $(window).height(),
      winWidth = $(window).width();

  clearTimeout(doit);
  doit = setTimeout(function(){ 
	if ($("#archived_wp_blog").length)
		$("#archived_wp_blog").iframeAutoHeight();
	$(".height_hack").css("min-height", window.innerHeight+"px");
  }, 100);
  // If viewport is wider than 1150px, show post comments in right column
  if(winWidth > 1150){
    $('.commentsColumn').height(winHeight);
  }
}
