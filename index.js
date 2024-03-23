
function checkPassword() {
    var enteredPassword = document.getElementById("password-input").value;

    if (enteredPassword.toLowerCase() !== "test") {
       document.getElementById("h3").textContent ="Wrong password! Please enter the right password";
    } else {
        document.getElementById("h3").textContent = "Password is correct! \n you get nothing!";
    }
}


document.addEventListener("DOMContentLoaded", function() {
  // Fade in the hero text on page load
  const heroTitle = document.querySelector('.hero-text h1');
  heroTitle.style.transition = 'opacity 1s ease-in-out';

  // Delay the fade-in effect
  setTimeout(() => {
      heroTitle.style.opacity = '1';
  }, 1000); // You can adjust the delay as needed
});


document.addEventListener("DOMContentLoaded", function() {
  // Fade in the hero text on page load
  const heroText = document.querySelector('.hero-text p');
  heroText.style.transition = 'opacity 1s ease-in-out';

  // Delay the fade-in effect
  setTimeout(() => {
      heroText.style.opacity = '1';
  }, 500); // You can adjust the delay as needed
});


let slideIndex = 0;
function showSlides() {
  let slides = document.querySelectorAll('.fade');

  slides[slideIndex].classList.remove('active');
  slideIndex = (slideIndex + 1) % slides.length;
  slides[slideIndex].classList.add('active');

  setTimeout(showSlides, 4000); // Change slide every 2 seconds
}
document.addEventListener('DOMContentLoaded', showSlides);