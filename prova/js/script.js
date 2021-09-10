


    window.onscroll = function() {scrollFunction()};
    // Navbar shrink function
    function scrollFunction() {
        var navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
            
            navbarCollapsible.classList.add('navbar-shrink')
            
        } else {
            navbarCollapsible.classList.remove('navbar-shrink')
        }
    }