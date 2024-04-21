document.addEventListener('DOMContentLoaded', function () {
    const scrollLinks = document.querySelectorAll('a[href^="#"]'); // Adjust the selector as needed

    scrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                const targetPosition = targetElement.offsetTop;
                const offset = 100; // Adjust based on your fixed header's height
                const scrollTarget = targetPosition - offset;

                window.scrollTo({
                    top: scrollTarget,
                    behavior: 'smooth'
                });
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    // Close navbar when a nav-link is clicked in responsive mode
    $('.navbar-nav .nav-link').click(function() {
        $('.navbar-collapse').collapse('hide');
    });

    // Close navbar when clicking outside of the navbar in responsive mode
    $(document).click(function(event) {
        let clickover = $(event.target);
        let _opened = $(".navbar-collapse").hasClass("show");
        if (_opened === true && !clickover.hasClass("navbar-toggler")) {
            $(".navbar-toggler").click();
        }
    });
});
