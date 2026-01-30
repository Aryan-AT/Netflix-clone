document.addEventListener("DOMContentLoaded", () => {

const splash = document.getElementById("splash");
const main = document.getElementById("main");
const openSite = document.getElementById("openSite");

 // If splash elements don't exist (other pages like mylist.html), do nothing
  if (!splash || !main || !openSite) return;

  // Check if profile already selected
  const alreadySeen = localStorage.getItem("profileSelected");

  if (alreadySeen === "true") {
    splash.style.display = "none";
    main.style.display = "block";
  } else {
    splash.style.display = "flex";
    main.style.display = "none";
  }

  // On profile click
  openSite.addEventListener("click", () => {
    localStorage.setItem("profileSelected", "true");
    splash.style.display = "none";
    main.style.display = "block";
  });

});

/* CHECK IF SPLASH ALREADY SEEN */
if (localStorage.getItem("profileSelected")) {
  splash.style.display = "none";
  main.style.display = "block";
} else {
  splash.style.display = "flex";
  main.style.display = "none";
}

/* ON PROFILE CLICK */
openSite.onclick = () => {
  localStorage.setItem("profileSelected", "true");
  splash.style.display = "none";
  main.style.display = "block";
};

const playBtn = document.getElementById("playBtn");
const videoPlayer = document.getElementById("videoPlayer");
const video = document.getElementById("video");
const closeVideo = document.getElementById("closeVideo");

playBtn.onclick = () => {
  videoPlayer.style.display = "flex";
  video.play();
};

closeVideo.onclick = () => {
  video.pause();
  video.currentTime = 0;
  videoPlayer.style.display = "none";
};

window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 20) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

document.querySelectorAll(".card").forEach(card => {
  const video = card.querySelector("video");

  card.addEventListener("mouseenter", () => {
    video.play();
  });

  card.addEventListener("mouseleave", () => {
    video.pause();
    video.currentTime = 0;
    video.load();
  });

  card.addEventListener("click", () => {
    const src = card.getAttribute("data-video");
    document.getElementById("video").src = src;
    document.getElementById("videoPlayer").style.display = "flex";
    document.getElementById("video").play();
  });
});

