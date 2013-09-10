$(document).ready(function(){
  $("#tagline").delay(400).slideDown(600);
  $("#h1alt").click(function(){
    $("#projects_page").stop(true,true).fadeOut(200);
	$("#about_page").stop(true,true).fadeOut(200);
	$("#h1alt").slideUp(800, "easeOutExpo");
	$("#h1big").delay(600).slideDown(800, "easeOutExpo");
	$("#tagline").delay(1400).slideDown(600);
  });
  $("#about").click(function(){
	$("#h1big").slideUp(800, "easeOutExpo");
	$("#h1alt").delay(600).slideDown(800, "easeOutExpo");
    $("#tagline").slideUp(200);
	$("#projects_page").stop(true,true).fadeOut(200);
	$("#about_page").delay(600).slideDown(1000, "easeOutExpo");
  });
  $("#projects").click(function(){
	$("#h1big").slideUp(800, "easeOutExpo");
	$("#h1alt").delay(600).slideDown(800, "easeOutExpo");
    $("#tagline").slideUp(200);
	$("#about_page").stop(true,true).fadeOut(200);
	$("#projects_page").delay(600).slideDown(1000, "easeOutExpo");
  });
  $("#l-expand").click(function(){
	$("#l-expand").slideUp(200);
    $("#l-container").slideDown();
  });
  $("#l-close").click(function(){
	$("#l-container").slideUp();
	$("#l-expand").delay(300).fadeIn();
  });
  $("#g-expand").click(function(){
	$("#g-expand").slideUp(200);
    $("#g-container").slideDown();
  });
  $("#g-close").click(function(){
	$("#g-container").slideUp();
	$("#g-expand").delay(300).fadeIn();
  });
});