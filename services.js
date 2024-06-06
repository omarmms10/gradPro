        // JavaScript to handle smooth scrolling when clicking on anchor links
        document.addEventListener('DOMContentLoaded', function () {
            const anchorLinks = document.querySelectorAll('a[href^="#"]');
            
            anchorLinks.forEach(anchorLink => {
                anchorLink.addEventListener('click', function (e) {
                    e.preventDefault();
                    
                    const targetId = this.getAttribute('href').substring(1);
                    const targetElement = document.getElementById(targetId);
                    
                    if (targetElement) {
                        targetElement.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }
                });
            });
        });
  window.addEventListener('scroll', function() {
    var image = document.getElementById('vanishing-image');
    var scrollPosition = window.scrollY;
    var windowHeight = window.innerHeight;
    var imageHeight = image.offsetHeight;
    var imageTop = image.getBoundingClientRect().top + scrollPosition;

    var opacity = 1 - (scrollPosition - imageTop + windowHeight) / (windowHeight + imageHeight);

    if (opacity >= 0) {
      image.style.opacity = opacity;
    }
  });
  function redirectToSignUp() {
    window.location.href = "signup.html";
  }
