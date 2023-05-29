var slideIndex = 1;
    showSlide(slideIndex);
    autoplay();

    function changeSlide(n) {
      showSlide(slideIndex += n);
    }

    function showSlide(n) {
      var slides = document.getElementsByClassName("Slides");

      if (n > slides.length) {
        slideIndex = 1;
      }

      if (n < 1) {
        slideIndex = slides.length;
      }

      for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }

      slides[slideIndex - 1].style.display = "block";
    }

    function autoplay() {
      setInterval(function() {
        changeSlide(1);
      }, 2000); 
    }








