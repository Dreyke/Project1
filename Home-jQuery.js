// when link is clicked in the nav bar, scrolls to the target element
// I'm still having issues with this code, have struggled to get this working correctly.
// This doesn't seem to scroll smoothly.

$(document).ready(function () {
    $('.header').height($(window).height());
    $(".navbar a").click(function () {
        $("html, body").animate({
            scrollTop: $("#" + $(this).data('value')).offset().top,
        }, 1000)
    })
});
