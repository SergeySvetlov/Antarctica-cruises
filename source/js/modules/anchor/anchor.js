const popupMenu = document.querySelector('[data-menu]');
const overlay = document.querySelector('[data-overlay]');
// собираем все якоря; устанавливаем время анимации и количество кадров
const anchors = [].slice.call(document.querySelectorAll('a[href*="#"]'));
const ANIMATION_TIME = 1500;
const FRAMES_COUNT = 120;

const animateAnchors = () => {
  anchors.forEach(function (item) {
    // каждому якорю присваиваем обработчик события
    item.addEventListener('click', function (e) {
    // убираем стандартное поведение
      e.preventDefault();

      // для каждого якоря берем соответствующий ему элемент и определяем его координату Y
      let coordY = document.querySelector(item.getAttribute('href')).getBoundingClientRect().top + window.pageYOffset;

      // запускаем интервал, в котором
      let scroller = setInterval(function () {
        // считаем на сколько скроллить за 1 такт
        let scrollBy = coordY / FRAMES_COUNT;

        // если к-во пикселей для скролла за 1 такт больше расстояния до элемента
        // и дно страницы не достигнуто
        if (scrollBy > window.pageYOffset - coordY && window.innerHeight + window.pageYOffset < document.body.offsetHeight) {
          // то скроллим на к-во пикселей, которое соответствует одному такту
          window.scrollBy(0, scrollBy);
        } else {
          // иначе добираемся до элемента и выходим из интервала
          window.scrollTo(0, coordY);
          clearInterval(scroller);
        }
      // время интервала равняется частному от времени анимации и к-ва кадров
      }, ANIMATION_TIME / FRAMES_COUNT);
      overlay.classList.remove('is-overlay');
      popupMenu.classList.add('is-closed');
      document.body.style.overflow = 'auto';
    });
  });
};

export {animateAnchors};
