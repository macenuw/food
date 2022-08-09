
function tabs(parentSelector, imgSelector, buttonSelector, textSelector) {
  const tabs = document.querySelector(parentSelector);
  const tabsImages = tabs.querySelectorAll(imgSelector);
  const control = tabs.querySelectorAll(buttonSelector);
  const text = tabs.querySelectorAll(textSelector);
  addActiveTab(0, tabsImages, control, text)
  control.forEach((btn, index) => {
    btn.addEventListener('click', (e) => {
      if (e.target === btn) {
        removeActiveTab(tabsImages, control, text)
        addActiveTab(index, tabsImages, control, text)
      }
    })
  })

  function removeActiveTab(imgSelector, buttonSelector, textSelector) {
    imgSelector.forEach(item => item.classList.remove('active'))
    buttonSelector.forEach(item => item.classList.remove('active'))
    textSelector.forEach(item => item.classList.remove('active'))
  }

  function addActiveTab(index, img, button, text) {
    img[index].classList.add('active', 'activeAnim')
    button[index].classList.add('active')
    text[index].classList.add('active')
  }
}
module.exports = tabs;