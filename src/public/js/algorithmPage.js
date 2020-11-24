let arrowBack = document.querySelector('.arrow-back');
if (arrowBack) arrowBack.setAttribute('onmousedown', 'fadeOut()');

let button = document.getElementById('btn-menu');
let slider = document.getElementById('slider');
let slideArea = document.getElementById('slide-area');
let transition = document.getElementById('transition');

if (button && slider && slideArea) {
  button.addEventListener('click', function () {
    if (!this.classList.contains('flip-on')) {
      this.classList.remove('flip-off');
      this.classList.add('flip-on');
      slideArea.classList.remove('slide-area-off');
      slideArea.classList.add('slide-area-on');
      slider.classList.remove('slide-off');
      slider.classList.add('slide-on');

      setTimeout(() => {
        if (transition.classList.contains('transparent'))
          transition.classList.remove('transparent');

        transition.classList.remove('fade-out');
        transition.classList.add('fade-in');
      }, 600);
    } else {
      this.classList.remove('flip-on');
      this.classList.add('flip-off');
      slideArea.classList.remove('slide-area-on');
      slideArea.classList.add('slide-area-off');
      slider.classList.remove('slide-on');
      slider.classList.add('slide-off');
      if (!transition.classList.contains('transparent'))
        transition.classList.add('transparent');
    }
  });

  slideArea.addEventListener('click', () => {
    button.classList.remove('flip-on');
    button.classList.add('flip-off');
    slideArea.classList.remove('slide-area-on');
    slideArea.classList.add('slide-area-off');
    slider.classList.remove('slide-on');
    slider.classList.add('slide-off');
    if (!transition.classList.contains('transparent'))
    transition.classList.add('transparent');
  });
}
