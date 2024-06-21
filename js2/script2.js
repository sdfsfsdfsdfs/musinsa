$( document ).ready( function() {
    AOS.init({
        duration: 5000,
        easing: 'ease-in-out'
    });
    
  });
  
  $( document ).ready( function() {
    AOS.init({
        duration: 5000,
        easing: 'ease-in-out'
    });
    
  });
  
  
  
  
  
  $(document).ready(function() {
  
      $('header>nav>ul>li').mouseenter(function() {
        $(this).find('.l_subnav').stop().slideDown();
      });
      $('header>nav>ul>li').mouseleave(function() {
        $('.l_subnav').stop().slideUp();
      });
  
  
  
    });
  
  
  //프로모션 이미지 애니메이션(CSS 코드와 연계 구현)   
  document.addEventListener("DOMContentLoaded", function() {
    const promotions = document.querySelectorAll(".promotion1 img, .promotion2 img, .promotion3 img");
    function checkScroll() {
      promotions.forEach(promotion => {
        const position = promotion.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;
        if (position < screenHeight * 0.8) {
          promotion.classList.add("show");
        }
      });
    }
  window.addEventListener("scroll", checkScroll);
  });
    
  
  
  //스토리 타이포그래픽 애니메이션(CSS 코드와 연계 구현)
  document.addEventListener("DOMContentLoaded", function() {
      const animatedText = document.querySelector('.animated-text');
      let animatedOnce = false;
      function checkAnimation() {
      const position = animatedText.getBoundingClientRect().top;
      const screenHeight = window.innerHeight;
    
        if (!animatedOnce && position < screenHeight * 0.8) {
          animatedText.classList.add("animated");
          animatedOnce = true; 
        }
      }
     window.addEventListener("scroll", checkAnimation);
     checkAnimation();
    });
  
  
    
    //기획전 이미지 애니메이션
document.addEventListener("DOMContentLoaded", function() {
  var imageList = document.querySelectorAll('.planning ul li');
  function startAnimation() {
    imageList.forEach(function(image) {
      image.classList.add('animate');
    });
  }

  // 페이지 진입 시 실행할 함수를 스크롤 이벤트에 연결
  window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY;
    var windowHeight = window.innerHeight;
    var planningSection = document.querySelector('.planning');

    // 페이지 상단이 planning 섹션의 아래로 스크롤 되었을 때 애니메이션 실행
    if (scrollPosition + windowHeight >= planningSection.offsetTop) {
      startAnimation();
      // 이벤트 리스너를 제거하여 중복 실행을 방지합니다.
      window.removeEventListener('scroll', arguments.callee);
    }
  });
});
    
  
  
  