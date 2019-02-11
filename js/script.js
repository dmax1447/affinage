var slideImageLeft = document.querySelector('.slide-image-left');
var slideImageRight = document.querySelector('.slide-image-right');
var showPreviosSlideBtn = document.querySelector('.slide-control-previos');
var showNextSlideBtn = document.querySelector('.slide-control-next');

var onSlideBtnClick = function (evt) {
  var leftImgSrc = slideImageLeft.src;
  var rightImgSrc = slideImageRight.src;
  slideImageLeft.src = rightImgSrc;
  slideImageRight.src = leftImgSrc;
}

showPreviosSlideBtn.addEventListener('click', onSlideBtnClick);
showNextSlideBtn.addEventListener('click', onSlideBtnClick);

