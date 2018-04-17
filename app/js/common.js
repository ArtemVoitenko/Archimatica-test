$(function() {
    $(".language label").click(function() {
        $(".language label").not($(this)).removeClass('activeLang');
        $(this).addClass('activeLang');
    });
    $(".showMore").click(function(e) {
        e.preventDefault();
        $(this).slideUp()
        box.append(html)
    });
    $(window).scroll(function() {
        var logo = $('.logo img');
        if ($(window).scrollTop() > 2700) {
            $('.show-menu').removeClass("scrolledNav");
            logo.attr('src', 'img/logo.png')
            if ($(window).scrollTop() > 4500) {
                $('.show-menu').addClass('scrolledNav');
                logo.attr('src', 'img/logoBl.png')
            }
        } else if ($(window).scrollTop() > 550) {
            $('.show-menu').addClass('scrolledNav');
            logo.attr('src', 'img/logoBl.png')
        } else {
            $('.show-menu').removeClass('scrolledNav');
            logo.attr('src', 'img/logo.png')
        }
    });
});