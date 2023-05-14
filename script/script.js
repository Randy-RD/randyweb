// ********* Pre Loader *********
  
var loader = document.getElementById("preloader");
  
window.addEventListener("load", function() {
    loader.style.display = "none";
});

// Get a reference to the anchor element
const instagramIcon = document.querySelector('.IGIcon img');

// Store the original source and the new source
const originalSource = instagramIcon.getAttribute('src');
const newSource = './assets/IGColor.png';

// Add event listeners for mouseenter and mouseleave
instagramIcon.addEventListener('mouseenter', function() {
  instagramIcon.setAttribute('src', newSource);
});

instagramIcon.addEventListener('mouseleave', function() {
  instagramIcon.setAttribute('src', originalSource);
});