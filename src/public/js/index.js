function fadeIn() {
  let body = document.getElementById('transition');
  body.setAttribute('class', 'fade-in');
}

function fadeOut() {
  let body = document.getElementById('transition');
  body.setAttribute('class', 'fade-out');
}

window.onload = fadeIn();

document.querySelector('header').setAttribute('onmousedown',"fadeOut()");

/* ---------------Troca de background--------------- */
// function changeBg(bg) {
//   let body = document.querySelector('body');
//   body.setAttribute('class', `bg-${bg}`);
// }

// changeBg(1);

// let bgNum = 2;
// setInterval(() => {
//   if(bgNum > 12) bgNum = 1;
//   changeBg(bgNum);
//   bgNum++;
// }, 10 * 1000);

