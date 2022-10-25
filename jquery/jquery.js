$(function (param) {
    $('.content').first().slideDown();
    $('.nav-tap').on("click", function (event) {
        var current_tab = $(this);
        $('.nav-tap').removeClass('active');
        current_tab.addClass('active');

        $('.content').slideUp();
        current_tab_href = current_tab.attr('href');
        $(current_tab_href).slideDown();

        event.preventDefault();
    })
});
