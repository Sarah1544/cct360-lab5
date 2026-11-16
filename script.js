let audio = document.getElementById("soundscape");
let visual1 = document.getElementById("visual-1");
let visual2 = document.getElementById("visual-2");
let visual3 = document.getElementById("visual-3");
let status = document.getElementById("status");

let visuals = [visual1, visual2, visual3];

audio.addEventListener("play", function() {
  status.innerHTML = "Playing...";
  for (let i = 0; i < visuals.length; i++) {
    visuals[i].classList.add("playing");
  }
});

audio.addEventListener("pause", function() {
  status.innerHTML = "Paused";
  for (let i = 0; i < visuals.length; i++) {
    visuals[i].classList.remove("playing");
  }
});

audio.addEventListener("ended", function() {
  status.innerHTML = "Finished";
  for (let i = 0; i < visuals.length; i++) {
    visuals[i].classList.remove("playing");
  }
});

audio.addEventListener("timeupdate", function() {
  let progress = (audio.currentTime / audio.duration) * 100;
  status.innerHTML = "Time: " + Math.floor(audio.currentTime) + "s";

  for (let i = 0; i < visuals.length; i++) {
    visuals[i].style.opacity = 0.5 + (progress / 200);
  }
});
