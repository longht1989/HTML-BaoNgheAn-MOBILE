/* ====================================
   Onload functions
   ==================================== */

$(function() {
    /*show mobile search*/
    $('.site-header__search').click(function() {
        $(this).toggleClass('is-active');
        $(".mobile__search").slideToggle('fast');
        $('.site-header__menu').removeClass('is-active');
        $(".mobile__menu").slideUp('fast');
    });
    /*show mobile menu*/
    $('.site-header__menu').click(function() {
        $(this).toggleClass('is-active');
        $(".mobile__menu").slideToggle('fast');
        $('.site-header__search').removeClass('is-active');
        $(".mobile__search").slideUp('fast');
    });
    /*show quickview panel*/
    $('.sprite-flash').click(function() {
        $('.quickview').addClass('is-active');
        $('.quickview-wrap').addClass('is-active');
        // disable scrolling body
        $('body').addClass('stop-scrolling');
    });
    $('.quickview-mask').click(function() {
        $('.quickview-wrap').removeClass('is-active');
        $('.quickview').removeClass('is-active');
        // enable scrolling body
        $('body').removeClass('stop-scrolling');
    });
    // define story with gif thumbnail
    $('.story__thumb img[src$=".gif"]').parents('.story').addClass('story--gif');
    // scroll to top 
    $(".sprite-top").click(function() {
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });
});

$(window).scroll(function() {
    $('.zone--affix').each(function() {
        var curPos = $(window).scrollTop();
        var zonePosTop = $(this).offset().top;
        var zoneHeight = $(this).innerHeight();
        var zonePosBot = zonePosTop + zoneHeight;
        var zoneHeaderHeight = $(this).children('.zone__header').outerHeight();
        var zoneContentHeight = $(this).children('.zone__content').height();
        if (zonePosTop < curPos && curPos < (zonePosBot - 24)) {
            $(this).children('.zone__header').addClass("affix");
            $(this).children('.zone__content').css(("padding-top"), zoneHeaderHeight);
        } else {
            $(this).children('.zone__header').removeClass("affix");
            $(this).children('.zone__content').css(("padding-top"), "0px");
        }
    });
});