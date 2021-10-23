const yearOfBirth = 1992;

jQuery(function () {
    $(window).on("scroll", function () {
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });
    let CurrentDate = new Date();
    $('#age').text(CurrentDate.getFullYear() - yearOfBirth);
    // slide-up script
    $('.scroll-up-btn').on("click", function () {
        $('html').animate({ scrollTop: 0 });
    });
    // toggle menu/navbar script
    $('.menu-btn').on("click", function () {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing animetion script
    var typed = new Typed(".typing", {
        strings: ["Software developer", "Software Engineer", "Computer Scientist", "Team player"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    // owl carousel script
    $('.owl-carousel').owlCarousel({
        margin: 20,
        loop: true,
        center: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,

            },
            600: {
                items: 2,

            },
            1000: {
                items: 3,
            }
        }
    });
    // Add click event to all list togggles
    $(".list-toggle").on("click", function () {
        // Move up DOM tree to nearest list
        // Toggle collapsed and expanded classes
        $(this).closest("ul").toggleClass("collapsed").toggleClass("expanded");
        $(this).find("i").toggleClass("fas fa-ellipsis-h").toggleClass("fas fa-minus");

    });
});

