let player = document.getElementById("player");
let photo = document.getElementById("photo");
let caption = document.getElementById("caption");
let message = document.getElementById("message");

let playBtn = document.getElementById("playBtn");
let pauseBtn = document.getElementById("pauseBtn");
let stopBtn = document.getElementById("stopBtn");
let upBtn = document.getElementById("upBtn");
let downBtn = document.getElementById("downBtn");

let thumbBridge = document.getElementById("thumb-bridge");
let thumbDiner = document.getElementById("thumb-diner");
let thumbFerry = document.getElementById("thumb-ferry");
let thumbNight = document.getElementById("thumb-night");

playBtn.addEventListener("click", playAudio);
pauseBtn.addEventListener("click", pauseAudio);
stopBtn.addEventListener("click", stopAudio);
upBtn.addEventListener("click", volumeUp);
downBtn.addEventListener("click", volumeDown);

function playAudio() {
  player.play();
}

function pauseAudio() {
  player.pause();
}

function stopAudio() {
  player.currentTime = 0;
  player.pause();
}

let volume = 1.0;

function volumeUp() {
  volume += 0.1;
  if (volume > 1.0) {
    volume = 1.0;
  }
  player.volume = volume;
  updateMessage();
}

function volumeDown() {
  volume -= 0.1;
  if (volume < 0.0) {
    volume = 0.0;
  }
  player.volume = volume;
  updateMessage();
}

function updateMessage() {
  let minutes = Math.floor(player.currentTime / 60);
  let seconds = Math.floor(player.currentTime) - minutes * 60;
  message.innerHTML = "time: " + minutes + ":" + seconds;
  message.innerHTML += "<br>";
  message.innerHTML += "volume: " + Math.round(player.volume * 10) / 10;
}

player.addEventListener("play", playerStarted);
player.addEventListener("pause", playerPaused);
player.addEventListener("ended", playerEnded);
player.addEventListener("timeupdate", playerProgressed);

function playerStarted() {
  photo.style.opacity = 1;
}

function playerPaused() {
  photo.style.opacity = 0.5;
}

function playerEnded() {
  caption.innerHTML = "That was one minute in New York.";
  message.innerHTML = "Press play to listen again";
}

function playerProgressed() {
  updateMessage();
  if (player.currentTime < 19) {
    showBridge();
  } else if (player.currentTime < 36) {
    showDiner();
  } else if (player.currentTime < 52) {
    showFerry();
  } else {
    showNight();
  }
}

function showBridge() {
  photo.src = "images/bridge.jpg";
  photo.style.borderColor = "#e8a44a";
  caption.innerHTML = "Walking over the Manhattan Bridge at sunset";
}

function showDiner() {
  photo.src = "images/diner.jpg";
  photo.style.borderColor = "#c0392b";
  caption.innerHTML = "Pancakes while they call out order numbers";
}

function showFerry() {
  photo.src = "images/liberty.jpg";
  photo.style.borderColor = "#4a90c2";
  caption.innerHTML = "On the ferry past the Statue of Liberty";
}

function showNight() {
  photo.src = "images/night.jpg";
  photo.style.borderColor = "#2e2a4a";
  caption.innerHTML = "Rain on Times Square, the city from above";
}

thumbBridge.addEventListener("click", goToBridge);
thumbDiner.addEventListener("click", goToDiner);
thumbFerry.addEventListener("click", goToFerry);
thumbNight.addEventListener("click", goToNight);

function goToBridge() {
  player.currentTime = 0;
  player.play();
}

function goToDiner() {
  player.currentTime = 19;
  player.play();
}

function goToFerry() {
  player.currentTime = 36;
  player.play();
}

function goToNight() {
  player.currentTime = 52;
  player.play();
}
