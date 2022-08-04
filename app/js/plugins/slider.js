function sliderInit(sliderSelector, sliderItemsWrapper, sliderItemsInner, sliderItemSelector, prevBtn, nextBtn, slideNowSelector, totalSlidesSelector) {
  const slider = document.querySelector(sliderSelector);
  const itemsWrapper = slider.querySelector(sliderItemsWrapper);
  const itemsInner = slider.querySelector(sliderItemsInner);
  const sliderItems = slider.querySelectorAll(sliderItemSelector);
  const prev = slider.querySelector(prevBtn);
  const next = slider.querySelector(nextBtn);
  const sliderWidth = window.getComputedStyle(itemsWrapper).width;
  const dots = document.createElement('div');
  let slideNow, totlalSlides, slideNowCounter = 1;
  if (slideNowSelector) {
    slideNow = slider.querySelector(slideNowSelector)
  };
  if (totalSlidesSelector) {
    totlalSlides = slider.querySelector(totalSlidesSelector)
  };

  dots.classList.add('slider__dots');
  itemsWrapper.style.overflow = 'hidden';
  itemsInner.style.display = 'flex';
  itemsInner.style.width = 100 * sliderItems.length + '%';
  itemsInner.style.transition = 1 + 's';
  sliderItems.forEach(slide => slide.style.width = sliderWidth);
  slider.append(dots);
  for (let i = 0; i < sliderItems.length; i++) {
    const dot = document.createElement('span');
    dot.classList.add('dot')
    dots.append(dot)
  };
  changeSlide(1);
  if (sliderItems.length < 10) {
    totlalSlides.textContent = '/0' + sliderItems.length;
  } else {
    totlalSlides.textContent = sliderItems.length
  }

  prev.addEventListener('click', () => {
    if (slideNowCounter > 1) {
      changeSlide(slideNowCounter - 1)
    } else {
      changeSlide(sliderItems.length)
    }
  })
  next.addEventListener('click', () => {
    if (slideNowCounter < sliderItems.length) {
      changeSlide(slideNowCounter + 1)
    } else {
      changeSlide(1)
    }
  })

  function changeSlide(num) {
    slideNowCounter = num
    addActiveDot(num);
    itemsInner.style.transform = 'translate(-' + (parseInt(sliderWidth) * (num - 1)) + 'px)';
    if (slideNowCounter < 10) {
      slideNow.textContent = '0' + slideNowCounter;
    } else {
      totlalSlides.textContent = slideNowCounter
    }
  }

  function addActiveDot(num) {
    const dotsOnPage = dots.querySelectorAll('.dot')
    dotsOnPage.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        changeSlide(index + 1)
      })
      dot.classList.remove('active')
      if (dot === dotsOnPage[num - 1]) {
        dot.classList.add('active')
      }
    })
  }
}