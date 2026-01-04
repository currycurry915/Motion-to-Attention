window.HELP_IMPROVE_VIDEOJS = false;

$(document).ready(function () {

    var options = {
        slidesToScroll: 1,
        slidesToShow: 1,
        loop: true,

        navigation: true,    // ⬅️➡️ 화살표 ON
        pagination: false,   // ● dot OFF
        autoplay: false,     // ❌ 자동 슬라이드 OFF
        draggable: false,    // ❌ 드래그 OFF
    };

    // 모든 carousel에 적용 (현재 구조 유지)
    bulmaCarousel.attach('.carousel', options);

    bulmaSlider.attach();
});
