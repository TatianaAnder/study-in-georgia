'use strict'


function initMainScripts() {
  console.log('Main scripts are working');

  // FAQ
  const faqQuestions = document.querySelectorAll('.faq-question');
  faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
      const card = question.parentElement;
      card.classList.toggle('open');
    });
  });

  // Mobile menu
  const menuFolded = document.querySelector('#menu-fold');
  const navigation = document.getElementById('navbarNav');

  menuFolded.addEventListener('click', () => {
    navigation.classList.toggle('active');
    menuFolded.classList.toggle('active');
  });

const features = document.querySelector('.features');
const featureCount = document.querySelectorAll('.feature').length;
let currentIndex = 0;

// Стрелки
document.querySelector('.arrow.left').addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateSlider();
  }
});

document.querySelector('.arrow.right').addEventListener('click', () => {
  if (currentIndex < featureCount - 1) {
    currentIndex++;
    updateSlider();
  }
});

function updateSlider() {
  features.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Свайп для мобильных
let startX = 0;
let isDragging = false;

features.addEventListener('touchstart', e => {
  startX = e.touches[0].clientX;
  isDragging = true;
});

features.addEventListener('touchmove', e => {
  if (!isDragging) return;
});

features.addEventListener('touchend', e => {
  isDragging = false;
  const endX = e.changedTouches[0].clientX;
  const diff = startX - endX;

  if (diff > 50 && currentIndex < featureCount - 1) {
    currentIndex++;
  } else if (diff < -50 && currentIndex > 0) {
    currentIndex--;
  }

  updateSlider();
});


  // const featuresContainer = document.querySelector(".features");
  // if (featuresContainer && window.innerWidth < 768) {
  //   const features = document.querySelectorAll(".feature");
  //   let index = 0;
  //   let intervalId;

  //   function showFeature(i) {
  //     features.forEach((feature, idx) => {
  //       feature.classList.toggle("active", idx === i);
  //     });
  //   }

  //   function startSlider() {
  //     intervalId = setInterval(() => {
  //       index = (index + 1) % features.length;
  //       showFeature(index);
  //     }, 3000);
  //   }

  //   function stopSlider() {
  //     clearInterval(intervalId);
  //   }


  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       entries.forEach(entry => {
  //         if (entry.isIntersecting) {
  //           showFeature(index);
  //           startSlider();
  //         } else {
  //           stopSlider();
  //         }
  //       });
  //     },
  //     { root: null, threshold: 0.1 }
  //   );

  //   observer.observe(featuresContainer);


  //   let startX = 0;
  //   featuresContainer.addEventListener('touchstart', (e) => {
  //     startX = e.touches[0].clientX;
  //   });

  //   featuresContainer.addEventListener('touchend', (e) => {
  //     let endX = e.changedTouches[0].clientX;
  //     let diff = startX - endX;

  //     if (Math.abs(diff) > 30) { 
  //       if (diff > 0) {
  //         index = (index + 1) % features.length;
  //       } else {
  //         index = (index - 1 + features.length) % features.length;
  //       }
  //       showFeature(index);
  //     }
  //   });
  // }

  // Форма
  window.formbutton = window.formbutton || function () { (formbutton.q = formbutton.q || []).push(arguments) };
}















