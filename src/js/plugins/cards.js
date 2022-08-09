function cards() {
  const posts = [{
      image: 'images/tabs/vegy',
      imageAlt: 'vegy',
      title: 'Меню "Фитнес"',
      text: 'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
      price: 9,
    },
    {
      image: 'images/tabs/elite',
      imageAlt: 'elite',
      title: 'Меню “Премиум”"',
      text: 'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
      price: 16,
    }, {
      image: 'images/tabs/post',
      imageAlt: 'post',
      title: 'Меню "Постное"',
      text: 'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
      price: 12,
    }
  ];
  class Post {
    constructor(image, alt, title, text, price, parent) {
      this.image = image;
      this.alt = alt;
      this.title = title;
      this.text = text;
      this.price = price;
      this.cours = 39.70;
      this.parent = document.querySelector(parent);
      this.priceByUah();
    }
    priceByUah() {
      this.price = Math.floor(this.price * this.cours);
    }
    renderPost() {
      const fragment = document.createElement('div');
      fragment.classList.add('product-card')
      fragment.innerHTML = `<div class="product-card__img-inner">
      <picture>
          <source srcset="${this.image}.webp" type="image/webp">
          <img class="slider__img" src="${this.image}.jpg" alt=${this.alt}>
      </picture>
  </div>
  <div class="product-card__info">
      <h3 class="product-card__subtitle">${this.title}</h3>
      <p class="product-card__text">
      ${this.text}
      </p>
  </div>
  <div class="product-card__cost">
      <span class="product-card__cost-text">Цена:</span>
      <span class="product-card__price">${this.price} <span class="product-card__price-info">грн/день</span>
      </span>
  </div>`;
      this.parent.append(fragment);
    }
  };
  posts.forEach(({
    image,
    imageAlt,
    title,
    text,
    price
  }) => {
    new Post(image, imageAlt, title, text, price, '.food__items').renderPost();
  })
}
module.exports = cards;