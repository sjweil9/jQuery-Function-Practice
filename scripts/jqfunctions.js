$(document).ready(function(){
    // functions below to create random background color gradients for button
    
    /*function getRandomRGB() {
        return "rgb(" + String(Math.floor(Math.random()*256)) + ", " + String(Math.floor(Math.random()*256)) + ", " + String(Math.floor(Math.random()*256)) + ")";
    };*/
    $('#rbg').click(function() {
        var col1 = "rgb(" + String(Math.floor(Math.random()*256)) + ", " + String(Math.floor(Math.random()*256)) + ", " + String(Math.floor(Math.random()*256)) + ")";
        var col2 = "rgb(" + String(Math.floor(Math.random()*256)) + ", " + String(Math.floor(Math.random()*256)) + ", " + String(Math.floor(Math.random()*256)) + ")";
        var bgcol = "linear-gradient(to bottom, " + col1 + ", " + col2 + ")";
        $(this).css('background:', bgcol);
    });

    //functions to make info slide down
    $('h3.contact').click(function() {
        $('ul.contact').slideToggle();
    });
    
    //one as fade just to demonstrate
    $('h3.edu').click(function() {
        if($('ul.edu').css('display') == "none") {
            $('ul.edu').fadeIn();
        }
        else {
            $('ul.edu').fadeOut();
        }
    });

    //one as hide/show just to demonstrate
    $('h3.work').click(function() {
        if ($('ul.work').css('display') == "none") {
            $('ul.work').show();
        }
        else {
            $('ul.work').hide();
        }
    });

    //center text (adding class)
    $('#cnt').click(function() {
        $('#cnt').addClass('lefttext');
    });

    //hover animations for links
    $('a').on('mouseenter', function() {
        $(this).closest('li').addClass('gold');
    });
    $('a').on('mouseleave', function() {
        $(this).closest('li').removeClass('gold');
    });

    //append!
    /*$('apnd').click(function() {
        $(this).parent().append("<p>Where did I come from?</p>");
    });*/
});