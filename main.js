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


// arrows
const features = document.querySelector('.features');
const featureCount = document.querySelectorAll('.feature').length;
let currentIndex = 0;

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

}















