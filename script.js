let playerScreen = document.querySelector('.player__screen');
let panelSwitch = document.querySelector('.panel__switch');
let panelTime = document.querySelector('.panel__time');
let panelSlider = document.querySelector('.panel__slider');

playerScreen.ontimeupdate = () => {
  panelSlider.value = 100 * playerScreen.currentTime / playerScreen.duration;
  panelTime.innerHTML = playerScreen.currentTime.toFixed(2);
  if(playerScreen.ended) {
    panelSwitch.classList.toggle('active');
  }
};

panelSwitch.addEventListener('click', () => {
  panelSwitch.classList.toggle('active');
  if(playerScreen.paused) { 
    playerScreen.play();
  }
  else {
    playerScreen.pause();
  }
});
