function playVideo(videoSrc){

const main = document.getElementById("mainVideo");

main.src = videoSrc;
main.play();

window.scrollTo({
  top:0,
  behavior:"smooth"
});

}
