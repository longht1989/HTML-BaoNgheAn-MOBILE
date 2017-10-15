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
    // define story with gif thumbnail
    $('.story__thumb img[src$=".gif"]').parents('.story').addClass('story--gif');
});