


    window.onscroll = function() {scrollFunction()};
    // Navbar shrink function
    function scrollFunction() {
        var navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (document.body.scrollTop < 150 || document.documentElement.scrollTop < 150) {
            navbarCollapsible.classList.remove('navbar-shrink')
            
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }
    }