'use strict'


function initMainScripts(){
  console.log('Main scripts are working');

  const faqQuestions = document.querySelectorAll('.faq-question');
  const menuFolded = document.querySelector('#menu-fold');
  const navigation = document.getElementById('navbarNav');

  menuFolded.addEventListener('click', () => {
  navigation.classList.toggle('active');
  menuFolded.classList.toggle('active');
});

// slide feature when size less then 768
  const features = document.querySelectorAll(".feature");
  let index = 0
  function showFeature(i) {
    features.forEach((feature, idx) => {
      feature.classList.toggle("active", idx === i);
    });
  
    if (window.innerWidth < 768){
      showFeature(index)
      setInterval(() => {
        index = (index + 1) % features.length;
        showFeature(index);
      }, 3000);
    }


    //open/close answer to a FAQ
  faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
      const card = question.parentElement;
      card.classList.toggle('open');
    });
  });

  window.formbutton=window.formbutton||function(){(formbutton.q=formbutton.q||[]).push(arguments)};

}













