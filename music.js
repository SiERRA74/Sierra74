// Grab elements
const audio   = document.getElementById('tune');
const play    = document.querySelector('.playy');
const pause   = document.querySelector('.pausee');
const marquee1 = document.getElementById('marquee1');

// Called by onclick="songstart();" in the HTML
function songstart() {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
}

// UI mirrors the audio's real state — no desync possible
audio.addEventListener('play', () => {
  play.style.display  = 'none';
  pause.style.display = 'inline';
  if (marquee1) marquee1.start();
});

audio.addEventListener('pause', () => {
  play.style.display  = 'inline';
  pause.style.display = 'none';
  if (marquee1) marquee1.stop();
});

audio.addEventListener('ended', () => {
  play.style.display  = 'inline';
  pause.style.display = 'none';
  if (marquee1) marquee1.stop();
});