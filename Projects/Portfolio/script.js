let preloader = document.querySelector(".preloader");

// window.addEventListener('load', function() {
//     loader.style.display = 'none'
// })

function loader() {
  preloader.classList.add("fade-out");
}
function fadeOut() {
  setInterval(loader, 2000);
}
window.onload = fadeOut();

// Theme changer
let icon = document.getElementById("icon");
icon.onclick = function () {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    icon.src = "images/sun.png";
  } else {
    icon.src = "images/moon.png";
  }
};

// For Auto-typing
let typed = new Typed(".auto-type", {
  strings: ["नमस्ते", "Hi", "Hello", "Holā", "Nǐn hǎo"],
  typeSpeed: 150,
  backSpeed: 100,
  loop: true,
});
