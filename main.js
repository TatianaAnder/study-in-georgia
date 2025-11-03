'use strict'


function initMainScripts(){
  console.log('Main scripts are working');

  const faqQuestions = document.querySelectorAll('.faq-question');
  const menuFolded = document.querySelector('#menu-fold');
  const navigation = document.getElementById('navbarNav');

  //folded menu when screen is phone size
  // menuFolded.addEventListener('click', ()=> {
  //     navigation.classList.toggle('active');
  // });


menuFolded.addEventListener('click', () => {
  navigation.classList.toggle('active');
  menuFolded.classList.toggle('active'); // добавляем сюда
});

      const features = document.querySelectorAll(".feature");
      let index = 0;

      function showFeature(i) {
        features.forEach((feature, idx) => {
          feature.classList.toggle("active", idx === i);
        });
      }

      showFeature(index);menuFolded

      setInterval(() => {
        index = (index + 1) % features.length;
        showFeature(index);
      }, 3000);
  


    //open/close answer to a FAQ
  faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
      const card = question.parentElement;
      card.classList.toggle('open');
    });
  });

}

















// const btn1 = document.getElementById('btn-1');


// let promise = new Promise((resolve, reject) => {
//     console.log('resolved');

//     let count = 10;
//     btn1.addEventListener('click', function(){
//         resolve(count);
//         clearInterval(timer);
//     })

//     let timer = setInterval(function () {
//         count--;
//         btn1.textContent = 'Apply Now ' + count;

//         if (count == 0){
//             reject();
//             clearInterval(timer);
//         }
//     }, 500);
        
// });


// promise.then(
//     function (count){
//         btn1.style.background = 'green';
//         console.log('Assingment is finished on the ' +count+  ' second');
//     }, 
//     function(){
//         console.log('rejected');
//         btn1.style.background = 'red';
//     }
// );




