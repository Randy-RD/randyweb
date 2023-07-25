document.addEventListener('DOMContentLoaded', function() {
  // Pre Loader
  var loader = document.getElementById("preloader");

  window.addEventListener("load", function() {
      loader.style.display = "none";
  });

  // Scrolling Effect
  var navContainer = document.querySelector('.navContainer');
  var navLinks = document.querySelectorAll('.nav ul li a');
  var logoImage = document.querySelector('.logo');

  function updateNavbarStyle() {
      if (window.innerWidth > 768) {
          if (window.scrollY > 10) {
              navContainer.classList.add('desktop-scrolled');
              navLinks.forEach(link => {
                  link.style.color = 'white';
              });
              logoImage.src = './Assets/logo.png'; // Switch to the light version of the logo
          } else {
              navContainer.classList.remove('desktop-scrolled');
              navLinks.forEach(link => {
                  link.style.color = 'black';
              });
              logoImage.src = './Assets/logoBlack.png'; // Switch to the dark version of the logo
          }
      }
  }

  window.addEventListener('scroll', updateNavbarStyle);
  window.addEventListener('resize', updateNavbarStyle);
  updateNavbarStyle();

//  ********** Mobile Nav **************

$(document).ready(function() {
  $("#menu a").on("click", function() {
    $("#menuToggle input").prop("checked", false);
  });
});

$(document).ready(function() {
  $("#menuToggle input").on("change", function() {
    if ($(this).is(":checked")) {
      $("#menu a.itemMobile li").each(function(index) {
        $(this).css({
          "transition-delay": (index * 0.3) + "s",
          "opacity": 1,
          "transform": "translateX(0)"
        });
      });
    } else {
      $("#menu a.itemMobile li").each(function(index) {
        $(this).css({
          "transition-delay": "0s", // reset delay to 0
          "opacity": 0,
          "transform": "translateX(100px)"
        });
      });
    }
  });

  $("#menu a").on("click", function() {
    $("#menuToggle input").prop("checked", false);
  });
});


  //   ***************** Services ********************

  const buttons = document.querySelectorAll('.more');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const detailsBox = button.parentNode.querySelector('.details-Box');
      const card = button.parentNode;
      if (!card.classList.contains('active')) {
        card.classList.add('active');
        button.innerText = 'Show Less';
        detailsBox.style.display = 'block'; // Show the details box
      } else {
        card.classList.remove('active');
        button.innerText = 'Learn More';
        detailsBox.style.display = 'none'; // Hide the details box
      }
    });
  });

  //   ***************** Intro ********************

  var jobTitles = ["Designer", "Developer"]; // Modify or add more job titles here
  var jobTitleElement = document.getElementById("job-title-animation");
  var typingBarElement = document.getElementById("typing-bar");
  var jobTitleIndex = 0;
  var isDeleting = false;
  var typingSpeed = 150; // Speed in milliseconds (adjust as needed)

  function animateJobTitle() {
      var currentJobTitle = jobTitles[jobTitleIndex];
      var currentText = jobTitleElement.textContent;
      var textLength = currentText.length;

      if (!isDeleting) {
          // Typing animation
          if (textLength < currentJobTitle.length) {
              jobTitleElement.textContent += currentJobTitle.charAt(textLength);
              setTimeout(animateJobTitle, typingSpeed);
          } else {
              isDeleting = true;
              setTimeout(animateJobTitle, typingSpeed * 2);
          }
      } else {
          // Deleting animation
          if (textLength > 0) {
              jobTitleElement.textContent = currentText.slice(0, textLength - 1);
              setTimeout(animateJobTitle, typingSpeed / 2);
          } else {
              isDeleting = false;
              jobTitleIndex = (jobTitleIndex + 1) % jobTitles.length;
              setTimeout(animateJobTitle, typingSpeed);
          }
      }

      // Toggling typing bar
      typingBarElement.style.display = isDeleting ? "none" : "inline";
  }

  animateJobTitle();


  //   ***************** Testimonial ********************

  var imageContainer = document.querySelector('.testimonial-wrapper');
  var button = document.querySelector('.toms-Website');
  var image = document.querySelector('.testimonial-Image');

  imageContainer.addEventListener('mouseenter', function() {
      image.style.opacity = '0.7';
      button.style.visibility = 'visible';
  });

  imageContainer.addEventListener('mouseleave', function() {
      image.style.opacity = '1';
      button.style.visibility = 'hidden';
  });

  // Smooth scrolling
  navLinks.forEach(link => {
      link.addEventListener('click', (event) => {
          event.preventDefault();
          const target = document.querySelector(link.getAttribute('href'));
          target.scrollIntoView({ behavior: 'smooth' });
      });
  });

  // Page load scroll to top
  window.onload = function() {
      window.scrollTo(0, 0);
  }
});

// ******** Page animations **************

// Animate elements when they come into the viewport
var animateOnScrollElements = document.querySelectorAll('.fade-out');
var observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.remove('fade-out');
            entry.target.classList.add('fade-in');
        } else {
            entry.target.classList.remove('fade-in');
            entry.target.classList.add('fade-out');
        }
    });
}, { threshold: 0.1 });

animateOnScrollElements.forEach(element => {
    observer.observe(element);
});

// JavaScript to adjust background position on scroll for Android devices

// Check if the user agent is an Android device
const isAndroid = /Android/i.test(navigator.userAgent);

// Function to adjust background position
function adjustBackgroundPosition() {
  if (isAndroid) {
    const scrollPosition = window.scrollY;
    document.body.style.backgroundPosition = `top right ${scrollPosition}px`;
  }
}

// Event listener to call the function on scroll
window.addEventListener('scroll', adjustBackgroundPosition);

// Call the function initially to set the background position
adjustBackgroundPosition();
