'use strict'



const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(question => {
  question.addEventListener('click', () => {
    const card = question.parentElement;
    card.classList.toggle('open');
  });
});






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




