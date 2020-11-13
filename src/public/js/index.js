function changeBg(bg) {
  let body = document.querySelector('body');
  body.setAttribute('class', `bg-${bg}`);
}

changeBg(1);

let bgNum = 2;
setInterval(() =>{
  if(bgNum > 12) bgNum = 1;
  changeBg(bgNum);
  bgNum++;
}, 10 * 1000);