


jQuery(document).ready(function($){
   // serch
    $('.control , .icon-material-search , .icon-material-search img , .btn-material').click( function(){
        $('body').addClass('search-active');

        $('.icon-close').fadeIn();
    });

    $('.icon-close').click( function(){
        $('body').removeClass('search-active');
        $('.icon-close').fadeOut();
    });

    //gallery

    $(".fancybox_gall").fancybox({

    });

    //tabs
    $('.tabgroup > div').hide();
    $('.tabgroup > div:first-of-type').show();
    $('.tabs a').click(function(e){
        e.preventDefault();
        var $this = $(this),
            tabgroup = '#'+$this.parents('.tabs').data('tabgroup'),
            others = $this.closest('li').siblings().children('a'),
            target = $this.attr('href');
        others.removeClass('active');
        $this.addClass('active');
        $(tabgroup).children('div').hide();
        $(target).show();

    })


});

//serch
$( ".input-search" ).focus(function() {
    $(".header_search_preview").fadeIn();
});

$( ".input-search" ).focusout(function() {
    $(".header_search_preview").hide();
});

//scroll
$(function() {
    var ele   = $('#scroll');
    var speed = 100, scroll = 10, scrolling;

    $('#scroll-up').mouseenter(function() {
        // Scroll the element up
        scrolling = window.setInterval(function() {
            ele.scrollTop( ele.scrollTop() - scroll );
        }, speed);
    });

    $('#scroll-down').mouseenter(function() {
        // Scroll the element down
        scrolling = window.setInterval(function() {
            ele.scrollTop( ele.scrollTop() + scroll );
        }, speed);

    });

    $('#scroll-up, #scroll-down').bind({
        click: function(e) {
            // Prevent the default click action
            e.preventDefault();
        },
        mouseleave: function() {
            if (scrolling) {
                window.clearInterval(scrolling);
                scrolling = false;
            }
        }
    });
});





