window.addEventListener('scroll', function () {
            var scrollingImage = document.querySelector('.imgBK');
            var scrolledHeight = window.scrollY;
            var windowHeight = window.innerHeight;

            // Adjust the opacity based on the scroll position
            scrollingImage.style.opacity = 1.5 - (scrolledHeight / windowHeight);
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