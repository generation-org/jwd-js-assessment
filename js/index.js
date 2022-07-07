/* ***************************
  JWD JavaScript Assessment

  This code is unfinished. You will need to study it to figure out what it does. Then you will need to use this and
  your own code, to finish the app. 
  
  The tasks you need to do are below.

    TASKS TODO:
      DONE  1. Calculate the score as the total of the number of correct answers

      DONE 2. Add an Event listener for the submit button, which will display the score and highlight 
         the correct answers when the button is clicked. Use the code from lines 67 to 86 to help you.

      DONE == 3. Add 2 more questions to the app (each question must have 4 options).

      DONE 4. Reload the page when the reset button is clicked (hint: search window.location)

      5. Add a countdown timer - when the time is up, end the quiz, display the score and highlight the correct answers
*************************** */


// FUNCTIONS TO RELOAD THE PAGE AND SHOW QUIZ =============
window.onload = function () {
  var reloading = sessionStorage.getItem("reloading");
  if (reloading) {
    sessionStorage.removeItem("reloading");
    showQuiz();
  }
}
function reloadP() {
  sessionStorage.setItem("reloading", "true");
  document.location.reload();
}


// quizArray QUESTIONS & ANSWERS
// q = QUESTION, o = OPTIONS, a = CORRECT ANSWER
// Basic ideas from https://code-boxx.com/simple-javascript-quiz/
const quizArray = [
  {
    q: 'Which is the third planet from the sun?',
    o: ['Saturn', 'Earth', 'Pluto', 'Mars'],
    a: 1, // array index 1 - so Earth is the correct answer here
  },
  {
    q: 'Which is the largest ocean on Earth?',
    o: ['Atlantic Ocean', 'Indian Ocean', 'Arctic Ocean', 'Pacific Ocean'],
    a: 3,
  },
  {
    q: 'What is the capital of Australia',
    o: ['Sydney', 'Canberra', 'Melbourne', 'Perth'],
    a: 1,
  },
  {
    q: 'What is the biggest forest in the world?',
    o: ['Primorye Forest', 'Tropical rainforest in Borneo', 'Amazon', 'New Guinea Tropical Rainforest'],
    a: 2,
  },
  {
    q: 'What language does people speak in Brazil?',
    o: ['English', 'Spanish', 'Portuguese', 'Japanese'],
    a: 2,
  }
];


// function to Display the quiz questions and answers from the object
const displayQuiz = () => {
  timer();
  const quizWrap = document.querySelector('#quizWrap');
  let quizDisplay = '';
  quizArray.map((quizItem, index) => {
    quizDisplay += `<ul class="list-group">
                   Q - ${quizItem.q}
                    <li class="list-group-item mt-2" id="li_${index}_0"><input type="radio" name="radio${index}" id="radio_${index}_0"> ${quizItem.o[0]}</li>
                    <li class="list-group-item" id="li_${index}_1"><input type="radio" name="radio${index}" id="radio_${index}_1"> ${quizItem.o[1]}</li>
                    <li class="list-group-item"  id="li_${index}_2"><input type="radio" name="radio${index}" id="radio_${index}_2"> ${quizItem.o[2]}</li>
                    <li class="list-group-item"  id="li_${index}_3"><input type="radio" name="radio${index}" id="radio_${index}_3"> ${quizItem.o[3]}</li>
                    </ul>
                    <div>&nbsp;</div>`;
    quizWrap.innerHTML = quizDisplay;
  });
};



// Calculate the score
const calculateScore = () => {
  let score = 0;
  quizArray.map((quizItem, index) => {
    for (let i = 0; i < 4; i++) {

      //highlight the li if it is the correct answer
      let li = `li_${index}_${i}`;
      let r = `radio_${index}_${i}`;
      liElement = document.querySelector('#' + li);
      radioElement = document.querySelector('#' + r);

      if (quizItem.a == i) {
        //change background color of li element here
        liElement.style.backgroundColor = "lightyellow";
      }

      if (radioElement.checked) {
        if (i == quizItem.a) {
          score++;
          console.log(`Score is : ${score}`);
        }
        // code for task 1 goes here
      }
    }
  });
  let scoreDiv = document.querySelector('#score');
  scoreDiv.innerHTML = `Your total score is ${score}`;

  clearTimeout(myTimeout);
};



// SHOW THE QUIZ IN THE PAGE 
function showQuiz() {
  document.querySelector('#quizBlock').style.display = 'block';
  start.style.display = 'none';
  displayQuiz();
}

// adding a countdown timer 

const startingTime = 10;
let timeLeft = startingTime * 60;

const timeDiv = document.querySelector('#time');

setInterval(timer, 1000);

function timer() {

  const minutes = Math.floor(timeLeft / 60);
  let seconds = timeLeft % 60;
  timeDiv.innerHTML = `${minutes}: ${seconds}`
  timeLeft--;

}


/// =================== MY TRIAL CODE ===================
/*
const startingTime = 10;
let timeLeft = startingTime * 60;

const timeDiv = document.querySelector('#time');

setInterval(timer, 1000);

function timer() {
  document.querySelector('#btnSubmit');
  if (btnSubmit.status = submitted) {
    timeDiv.innerHTML = "Well Done! You have completed the task!"
    calculateScore();
  }
  if (timeLeft > 0) {
    const minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    timeDiv.innerHTML = `${minutes}: ${seconds}`
    timeLeft--;
  }
  else {
    timeDiv.innerHTML = "Time is finished"
    calculateScore();
  }
*/
  //==========


  // if () {
  //   timeElement.innerHTML = "Well Done! you submitted on time!"
  // }
  // else if (timeLeft > 0) {
  //   remainingTime--;
  //   timeElement.innerHTML = `${minutes}: ${ seconds}`;
  // }
  // else {
  //   timeDiv.innerHTML = "Your time is up."
  //   calculateScore();
  // }
  // console.log(remainingTime)



    // Set the date we're counting down to  ============================ EXAMPLE
// var minutesToAdd = 5;
// var currentDate = new Date();
// var countDownDate = new Date(currentDate.getTime() + minutesToAdd * 60000);
// // Update the count down every 1 second
//===============================================
// var x = setInterval(function() {
//   // Get today's date and time
//   var now = new Date().getTime();
//   // Find the distance between now and the count down date
//   var distance = countDownDate - now;
//   // Time calculations for days, hours, minutes and seconds
//   var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//   var seconds = Math.floor((distance % (1000 * 60)) / 1000);
//   // Output the result in an element with id="demo"
//   document.getElementById("time").innerHTML = minutes + "m " + seconds + "s ";
//   // If the count down is over, write some text
//   if (distance < 0) {
//     clearInterval(x);
//     document.getElementById("time").innerHTML = "EXPIRED";
//   }
// }, 1000);

// EXAMPLE 1 ==============================
/*   let countdown = setInterval(()=>{
      if (submitted){
        timeElement.innerHTML= "You have submitted your answers ontime."
      }
      else if (remainingTime>0){
        remainingTime--;
        timeElement.innerHTML=`00:${remainingTime}`
      }else{
        timeElement.innerHTML= "Your time is up."
        calculateScore();
      }
      //console.log(remainingTime);
    },1000); */

