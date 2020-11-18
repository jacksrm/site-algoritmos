let audio = document.querySelector('audio');
let buttonPause = document.getElementById('muleke-pause');
let buttonPlay = document.getElementById('muleke-play');
let mulekeBlack = document.querySelector('div.muleke-blackscreen');

audio.play();
buttonPause.addEventListener('click', () => {
  audio.pause();
});

buttonPlay.addEventListener('click', () => {
  audio.play();
});

mulekeBlack.addEventListener('click', () => {
  mulekeBlack.classList.add('muleke-off');
})