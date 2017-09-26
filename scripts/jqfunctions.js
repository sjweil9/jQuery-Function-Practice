$(document).ready(function(){
    // functions below to create random background color gradients for button
    
    function getRandomRGB() {
        return "rgb(" + String(Math.floor(Math.random()*256)) + ", " + String(Math.floor(Math.random()*256)) + ", " + String(Math.floor(Math.random()*256)) + ")";
    };
    $('#rbg').click(function() {
        var bgcol = "linear-gradient(to bottom, " + getRandomRGB() + ", " + getRandomRGB() + ")";
        $('#rbg').css('background', bgcol);
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
        $('#cnt').toggleClass('lefttext');
    });

    //hover animations for links
    $('a').on('mouseenter', function() {
        $(this).closest('li').addClass('gold');
    });
    $('a').on('mouseleave', function() {
        $(this).closest('li').removeClass('gold');
    });

    //append!
    $('#apnd').click(function() {
        $(this).append("<p>Where did I come from?</p>");
    });

    //change entirely!
    $('#change').click(function() {
        $(this).html('<img src="images/surprise.jpg">');
    });

    //fun w text
    $('#text').click(function() {
        var colors = ['red', 'green', 'blue', 'cyan', 'black', 'white', 'gray', 'purple'];
        var picked = Math.floor(Math.random()*8);
        var newmessage = "My Text Is: " + colors[picked];
        $(this).css('color', colors[picked]);
        $(this).text(newmessage);
    })

    //submit to make some text appear after or before form
    $('#message').click(function() {
        var message = $(this).siblings().val();
        var pmessage = "<p>" + message + "</p>";
        var updown = confirm("Do you want to print message BELOW the form? (Cancel will put it BEFORE)");
        if (updown == true) {
            $(this).parent().after(pmessage);            
        }
        else {
            $(this).parent().before(pmessage);
        }
    });

    //make forms stop being annoying
    $('form').submit(function() {
        return false;
    });
});