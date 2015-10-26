// DOM Ready
$(function() {

    var $el, leftPos, newWidth;
    
    /*
        EXAMPLE ONE
    */
    
    /* Add Magic Line markup via JavaScript, because it ain't gonna work without */
    $("#example-one").append("<li id='magic-line'></li>");
    
    /* Cache it */
    var $magicLine = $("#magic-line");
    
    $magicLine
        .width($(".current_page_item").width())
        .css("left", $(".current_page_item a").position().left +43)
        .data("origLeft", $magicLine.position().left)
        .data("origWidth", $magicLine.width());

    console.log($magicLine.position().left);
        
    $("#example-one li").find("a").hover(function() {
        $el = $(this);
        leftPos = $el.position().left;
        console.log(leftPos);
        newWidth = $el.parent().width();
        
        $magicLine.stop().animate({
            left: leftPos,
            width: newWidth
        });
    }, function() {
        $magicLine.stop().animate({
            left: $magicLine.data("origLeft"),
            width: $magicLine.data("origWidth")
        });    
    });
    
    

    
    /* Kick IE into gear */
    $(".current_page_item_two a").mouseenter();
    
});