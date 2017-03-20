var alpha = 0.6; //Intensity of overlay from 0 - 1

$(function() {

  $("li").hover(function() {
    $("#dimmed").css("background-color", $(this).attr("hoverColor").replace(')', ', '+alpha+')').replace('rgb', 'rgba') );
  }, function() {
    $("#dimmed").css("background-color", "rgba(0,0,0,0)");
  });
});


function updateCSS(){
  $(".logo").css("height", ($("ul").height()*0.75) / $(".logo").length  );
};

/*
 * Replace all SVG images with inline SVG because FILL

 Source: https://gist.github.com/Bloggerschmidt/61beeca2cce94a70c9df
 */
jQuery('img').each(function(){
    var $img = jQuery(this);
    var imgID = $img.attr('id');
    var imgClass = $img.attr('class');
    var imgURL = $img.attr('src');

    jQuery.get(imgURL, function(data) {
        // Get the SVG tag, ignore the rest
        var $svg = jQuery(data).find('svg');

        // Add replaced image's ID to the new SVG
        if(typeof imgID !== 'undefined') {
            $svg = $svg.attr('id', imgID);
        }
        // Add replaced image's classes to the new SVG
        if(typeof imgClass !== 'undefined') {
            $svg = $svg.attr('class', imgClass+' replaced-svg');
        }

        // Remove any invalid XML tags as per http://validator.w3.org
        $svg = $svg.removeAttr('xmlns:a');

        // Check if the viewport is set, if the viewport is not set the SVG wont't scale.
        if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
            $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
        }

        // Replace image with new SVG
        $img.replaceWith($svg);

    }, 'xml');

});
