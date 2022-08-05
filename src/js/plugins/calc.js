function calc() {
  const gender = document.querySelector('#gender'),
    activity = document.querySelector('#activity'),
    height = document.querySelector('#height'),
    width = document.querySelector('#width'),
    age = document.querySelector('#age');
  let userAge, userHeight, userWidth, userActivity = 1.375,
    userGender = 'Мужчина';

  function getStaticInfo() {
    gender.addEventListener('click', (e) => {
      gender.querySelectorAll('.calc__btn').forEach(item => {
        item.classList.remove('active')
      });
      if (e.target.classList.contains('calc__btn')) {
        userGender = e.target.textContent;
        e.target.classList.add('active')
        calcCalories()
      }
    })
    activity.addEventListener('click', (e) => {
      activity.querySelectorAll('.calc__btn').forEach(item => {
        item.classList.remove('active')
      });
      if (e.target.classList.contains('calc__btn')) {
        userActivity = e.target.getAttribute('data-active')
        e.target.classList.add('active')
        calcCalories()
      }
    })
  }
  getStaticInfo()
  height.addEventListener('change', () => {
    userHeight = +height.value;
    calcCalories()
  })
  width.addEventListener('change', () => {
    userWidth = +width.value;
    calcCalories()
  })
  age.addEventListener('change', () => {
    userAge = +age.value;
    calcCalories()
  })

  function calcCalories() {
    let total;
    if (userAge && userHeight && userWidth && userActivity && userGender) {
      if (userGender === 'Мужчина') {
        total = Math.round((88.36 + (13.4 * userWidth) + (4.8 * userHeight) - (5.7 * userAge)) * userActivity)
      } else {
        total = Math.round((447.6 + (9.2 * userWidth) + (3.1 * userHeight) - (4.3 * userAge)) * userActivity)
      }
      document.querySelector('.calc__total').textContent = total
    }
  }
}

module.exports = calc;