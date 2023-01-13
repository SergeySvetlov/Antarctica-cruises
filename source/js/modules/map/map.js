function init() {
    var myMap = new ymaps.Map('map', {
            center: [59.938635, 30.323118],
            zoom: 17
        }, {
            searchControlProvider: 'yandex#search'
        }),

        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: 'Круизы в Антарктику',
            balloonContent: 'Это красивая метка'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'img/svg/pin.svg',
            // Размеры метки.
            iconImageSize: [18, 22],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-5, -22]
        });

    myMap.geoObjects
        .add(myPlacemark)
        .add(myPlacemarkWithContent);
};

const initYmaps = () => {
    ymaps.ready(init);
};

export {initYmaps};