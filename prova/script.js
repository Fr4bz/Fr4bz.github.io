window.onscroll = function() {scrollFunction()};


    // Navbar shrink function
    function scrollFunction() {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
            navbarCollapsible.classList.remove('navbar-shrink')
            
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

        function scrollFunction() {
            if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
              document.getElementById("navbar").style.padding = "30px 10px";
            } else {
              document.getElementById("navbar").style.padding = "80px 10px";
            }
          }
        
    };