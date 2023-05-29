const slideshow = document.querySelector('.slideshow');
const images = slideshow.getElementsByTagName('img');
let currentImageIndex = 0;
  
    function nextImage() {
  images[currentImageIndex].classList.remove('active');
  currentImageIndex = (currentImageIndex + 1) % images.length;
  images[currentImageIndex].classList.add('active');
  setInterval(nextImage, 1500000);
}