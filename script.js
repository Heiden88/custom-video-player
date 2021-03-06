let screen = document.querySelector('.player__screen');
let button = document.querySelector('.panel__switch');
let time = document.querySelector('.panel__time');
let panelSlider = document.querySelector('.panel__slider');
let mixer = document.querySelector('.mixer__volume');

function currentTime() {
  let seconds = Math.floor(screen.currentTime % 60),
    minutes = Math.floor(screen.currentTime / 60),
    hours = Math.floor(screen.currentTime / 60);

  hours = (hours < 10) ? "0" + hours : hours;
  minutes = (minutes < 10) ? "0" + minutes : minutes;
  seconds = (seconds < 10) ? "0" + seconds : seconds;

   return (screen.duration > 3599)
    ? `${hours}:${minutes}:${seconds}`
    : `${minutes}:${seconds}`;
}

screen.ontimeupdate = () => {
  panelSlider.value = 100 * screen.currentTime / screen.duration;
  screen.volume = mixer.value / 10;
  if(screen.volume === 0) {
    document.querySelector('.mixer').classList.add('mixer_active');
  }
  else {
    document.querySelector('.mixer').classList.remove('mixer_active');
  }
  time.innerHTML = currentTime();
  if(screen.ended) {
    button.classList.toggle('active');
  }
};

document.querySelector('.section').addEventListener('click', event => {
  let target = event.target.className;
  if((target === 'player__screen') || (target === 'panel__switch') || (target === 'panel__switch active')) {
    button.classList.toggle('active');
    if(screen.paused) { 
      screen.play();
    }
    else {
      screen.pause();
    }
  }
});

panelSlider.addEventListener('input', () => {
  screen.currentTime = screen.duration * panelSlider.value / 100;
});
