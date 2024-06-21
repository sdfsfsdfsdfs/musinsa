$(document).ready(function() {
    AOS.init({
        duration: 1000,
        easing: 'ease-in-out'
    });
});


$(document).ready(function() {

    $('.s1').show();
    //메뉴 리스트
    $('header>nav>ul>li').mouseenter(function() {
        $(this).find('.l_subnav').stop().slideDown();
    });
    $('header>nav>ul>li').mouseleave(function() {
        $('.l_subnav').stop().slideUp();
    });
    //좌우 페이드아웃
    var i = 0;
    setInterval(function() {
        if (i < 2) {
            i++;
        } else
            i = 0;

        $('#slide li').fadeOut('slow');
        $('#slide li').eq(i).fadeIn('slow');

    }, 4000);
    
    


    //배너 슬라이드
    // function slide() {
    //     $('.banner ul').animate({ left: "-100%" }, 1000,
    //         function() {
    //             $('.banner ul').append($('.banner ul li').first());
    //             $('.banner ul').css({ left: "0px" });
    //         });
    // }
    // setInterval(slide, 4000);

    var $slider = $('.bxslider').bxSlider({
        speed: 2000,
        pause: 5000,
        auto: true,
        infiniteLoop: true
    });


    //사이드바엑스
    $('.sidebarx').click(function() {
        $('.man, .woman, .buy, .share, .sidebarx').slideUp().hide();
    });
    $('.all').click(function() {
        $('.man, .woman, .buy, .share, .sidebarx').slideDown().show();
    });


    //더보기 버튼 클릭시 랭킹이미지 추가
    $('.more').click(function() {
        $('.ranking_more1, .ranking_more2').slideDown('slow', 'swing');
    });
    $('.more').click(function() {
        $('.more').hide();
    });


    //이미지 호버 시 스케일 변화
    document.querySelectorAll('.con1 .musinsa_pick li').forEach(item => {
        const image = item.querySelector('img');
        item.addEventListener('mouseover', () => {
            image.style.transform = 'scale(1.03)';
        });
        item.addEventListener('mouseout', () => {
            image.style.transform = 'scale(1)';
        });
    });
    document.querySelectorAll('.con1 .musinsa_pick1 li').forEach(item => {
        const image = item.querySelector('img');
        item.addEventListener('mouseover', () => {
            image.style.transform = 'scale(1.05)';
        });
        item.addEventListener('mouseout', () => {
            image.style.transform = 'scale(1)';
        });
    });
    document.querySelectorAll('.con1 .musinsa_pick2 li').forEach(item => {
        const image = item.querySelector('img');
        item.addEventListener('mouseover', () => {
            image.style.transform = 'scale(1.05)';
        });
        item.addEventListener('mouseout', () => {
            image.style.transform = 'scale(1)';
        });
    });

    //브랜드 슬라이드
    var num = 0;
    setInterval(function() {
        if (num < 2) {
            num++;
        } else
            num = 0;

        $('.colslide li').fadeOut('slow');
        $('.colslide li').eq(num).fadeIn('slow');

    }, 4000);

    $(document).ready(function() {
        var carouselWrapper = $('.image-container');
        var carouselItemWidth = $('.image-item').outerWidth(true);
        var currentIndex = 0;

        $('.next-btn').click(function() {
            currentIndex = (currentIndex + 1) % $('.image-item').length;
            carouselWrapper.css({
                'transform': 'translateX(' + (-carouselItemWidth * currentIndex) + 'px)',
                'transition': 'transform 0.5s ease'
            });
        });
    });



    //장바구니 팝업
    $('.buy').click(function() {
        $('.buypopup').show();
    });
    $('.btn2').click(function() {
        $('.buypopup').hide();
    });

    //공유 팝업
    $('.share').click(function() {
        $('.sharepopup').show();
    });
    $('.sharepopupx').click(function() {
        $('.sharepopup').hide();
    });


    $(document).ready(function() {
        AOS.init();
    });

});



// Smooth Scroll 애니메이션
document.addEventListener("DOMContentLoaded", function() {
    // 모든 링크에 대해 클릭 이벤트 추가
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault(); // 기본 동작 중단

            const target = document.querySelector(this.getAttribute('href')); // 클릭된 링크의 href 속성 값으로 요소 선택
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 100, // header height만큼 조정
                    behavior: 'smooth' // 스무스 스크롤 적용
                });
            }
        });
    });
});


