function updateCSS(){$(".logo").css("height",.8*$("ul").height()/$(".logo").length)}$(function(){updateCSS(),$("li").hover(function(){$("#dimmed").css("background-color",$(this).attr("hoverColor").replace(")",", 0.6)").replace("rgb","rgba"))},function(){$("#dimmed").css("background-color","rgba(0,0,0,0)")})}),jQuery("img").each(function(){var $img=jQuery(this),imgID=$img.attr("id"),imgClass=$img.attr("class"),imgURL=$img.attr("src");jQuery.get(imgURL,function(data){var $svg=jQuery(data).find("svg");void 0!==imgID&&($svg=$svg.attr("id",imgID)),void 0!==imgClass&&($svg=$svg.attr("class",imgClass+" replaced-svg")),$svg=$svg.removeAttr("xmlns:a"),!$svg.attr("viewBox")&&$svg.attr("height")&&$svg.attr("width")&&$svg.attr("viewBox","0 0 "+$svg.attr("height")+" "+$svg.attr("width")),$img.replaceWith($svg)},"xml")});