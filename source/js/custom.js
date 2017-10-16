/* ====================================
   Onload functions
   ==================================== */

$(function() {
    /*show mobile search*/
    $('.site-header__search').click(function() {
        $(this).toggleClass('is-active');
        $(".mobile__search").slideToggle();
        $('.site-header__menu').removeClass('is-active');
        $(".mobile__menu").slideUp('fast');
    });
    /*show mobile menu*/
    $('.site-header__menu').click(function() {
        $(this).toggleClass('is-active');
        $(".mobile__menu").slideToggle();
        $('.site-header__search').removeClass('is-active');
        $(".mobile__search").slideUp('fast');
    });
    /*show quickview panel*/
    $('.sprite-flash').click(function() {
        $('.quickview').addClass('is-active');
        $('.quickview-wrap').addClass('is-active');
    });
    $('.quickview-mask').click(function() {
        $('.quickview-wrap').removeClass('is-active');
        $('.quickview').removeClass('is-active');
    });
    // define story with gif thumbnail
    $('.story__thumb img[src$=".gif"]').parents('.story').addClass('story--gif');
    // scroll to top 
    $(".sprite-top").click(function() {
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });
});