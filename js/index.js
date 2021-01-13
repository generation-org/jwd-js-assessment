start = document.querySelector("#start");
start.addEventListener("click", function (e) {
  document.querySelector("#quizBlock").style.display = "block";
  start.style.display = "none";
});
// quizArray QUESTIONS & ANSWERS
// q = QUESTION, o = OPTIONS, a = CORRECT ANSWER
// Basic ideas from https://code-boxx.com/simple-javascript-quiz/
var quizArray = [
  {
    q: "Which is the third planet from the sun?",
    o: ["Saturn", "Earth", "Pluto", "Mars"],
    a: 1, // array index 1 - so Earth is the correct answer here
  },
  {
    q: "Which is the largest ocean on Earth?",
    o: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
    a: 3,
  },
  {
    q: "What is the capital of Australia",
    o: ["Sydney", "Canberra", "Melbourne", "Perth"],
    a: 1,
  },
];

// function to Display the quiz questions and answers from the object
const displayQuiz = () => {
  quizWrap = document.querySelector("#quizWrap");
  let quizDisplay = "";
  const myArray = quizArray.map((quizItem, index) => {
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

// call the displayQuiz function
displayQuiz();

// Calculate the score
let finalScore = 0;
const rArray = quizArray.map((quizItem, index) => {
  for (let i = 0; i < 4; i++) {
    let r = `radio_${index}_${i}`;
    radioElement = document.querySelector("#" + r);
    //  event listener to the radio button click
    radioElement.addEventListener("click", function (e) {
      // code for task 1 goes here
      
    });
  }
});

/* ********
TASKS TODO:
  1. Calculate the score as the total of the number of correct answers

  2. Add an Event listener for the submit button, which will display the score and highlight the correct answers when the button is clicked

  3. Reset the page (remove the questions from the UI) when the reset button is clicked

  4. Add a countdown timer - when the time is up, end the quiz, display the score and highlight the correct answers
******** */
