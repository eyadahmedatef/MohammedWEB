const questionsBank = [
  {
    "question": "What is the capital of France?",
    "choices": ["Paris", "London", "Rome", "Berlin"],
    "answer": "Paris"
},
{
    "question": "What is the largest ocean in the world?",
    "choices": ["Pacific Ocean", "Atlantic Ocean", "Indian Ocean", "Arctic Ocean"],
    "answer": "Pacific Ocean"
},
{
    "question": "Who score 17 goals in Champions Leage in Europe?",
    "choices": ["Ronaldo", "Messi", "Mbappa", "Halaand"],
    "answer": "Ronaldo"
},
{
    "question": "Who won a ballon Dior in 2018?",
    "choices": ["Modric", "Salah", "Ronaldo", "Benzema"],
    "answer": "Modric"
},
{
    "question": "What is a fastest car in world?",
    "choices": ["Ferari", "lamporgini", "buggati", "Meclaren"],
    "answer": "buggati"
},
{
    "question": "What is the name of the largest planet in our solar system?",
    "choices": ["Jupiter", "Saturn", "Uranus", "Neptune"],
    "answer": "Jupiter"
},
{
    "question": "What is the best player in Minecraft?",
    "choices": ["Dream", "MR.Beast", "Arab Games Networks", "Ury"],
    "answer": "Dream"
},
{
    "question": "Who won a ballon Dior in 2015?",
    "choices": ["Ronaldo", "Messi", "Modric", "benzima"],
    "answer": "Ronaldo"
},
{
    "question": "What is a best battle game in world?",
    "choices": ["Counter Attack","pubg", "free Fire", "warzone"],
    "answer": "warzone"
},
{
    "question": "What is a best sport in World?",
    "choices": ["baceball", "tennis", "beach ball", "Football"],
    "answer": "Football"
},
{
    "question": "What is the name of the US state that is known for its golden gate bridge?",
    "choices": ["California", "New York", "Florida", "Texas"],
    "answer": "California"
},
{
    "question": "What is the name of the most popular social media platform in the world?",
    "choices": ["Facebook", "Twitter", "Instagram", "TikTok"],
    "answer": "Facebook"
},
{
    "question": "What is the name of the most popular programming language in the world?",
    "choices": ["Python", "Java", "JavaScript", "C++"],
    "answer": "Python"
},
{
    "question": "What is the name of the most popular video game in the world?",
    "choices": ["Minecraft", "Grand Theft Auto V", "Call of Duty: Modern Warfare", "Fortnite"],
    "answer": "Minecraft"
},
{
    "question": "What is the name of the most popular streaming service in the world?",
    "choices": ["Netflix", "Amazon Prime Video", "Hulu", "Disney+"],
    "answer": "Netflix"
},
{
    "question": "What is the name of the most popular smartphone in the world?",
    "choices": ["Apple iPhone 13", "Samsung Galaxy S23", "Xiaomi Redmi Note 11 Pro", "OPPO Reno 7 Pro"],
    "answer": "Samsung Galaxy S23"
},
{
    "question": "Who Top scorer in football history ",
    "choices": ["Ronaldo", "Messi", "Romaro","Salah"],
    "answer": "Ronaldo"
},
{
  "question": "What is the name of the largest country in the world by area?",
  "choices": ["Russia", "Canada", "China", "United States"],
  "answer": "Russia"
},
{
  "question": "What is the name of the largest ocean in the world by volume?",
  "choices": ["Pacific Ocean", "Atlantic Ocean", "Indian Ocean", "Arctic Ocean"],
  "answer": "Pacific Ocean"
},
{
  "question": "What is the name of the longest river in the world?",
  "choices": ["Nile River", "Amazon River", "Yangtze River", "Yellow River"],
  "answer": "Nile River"
},
{
  "question": "Who invented Mobile phone in 1928?",
  "choices": ["Martin Cooper", "tomas Edeson", "Elsadat", "Horace Mann"],
  "answer": "Martin Cooper"
},
{
  "question": "What is the name of the largest desert in the world?",
  "choices": ["Sahara Desert", "Antarctic Desert", "Arctic Desert", "Arabian Desert"],
  "answer": "Sahara Desert"
},
{
  "question": "What is the name of the most populous city in the world?",
  "choices": ["Tokyo", "Shanghai", "Delhi", "São Paulo"],
  "answer": "Tokyo"
},
{
  "question": "What is the name of the most popular language in the world?",
  "choices": ["Mandarin Chinese", "Spanish", "English", "Hindi"],
  "answer": "English"
},
{
  "question": "What is the name of the world's oldest religion?",
  "choices": ["Hinduism", "Buddhism", "Judaism", "Christianity"],
  "answer": "Hinduism"
},
{
  "question": "What is the name of the world's largest ocean?",
  "choices": ["Pacific Ocean", "Atlantic Ocean", "Indian Ocean", "Arctic Ocean"],
  "answer": "Pacific Ocean"
},
{
  "question": "What is the name of the world's longest river?",
  "choices": ["Nile River", "Amazon River", "Yangtze River", "Yellow River"],
  "answer": "Nile River"
},
{
  "question": "What is the name of the world's tallest mountain?",
  "choices": ["Mount Everest", "K2", "Kangchenjunga", "Lhotse"],
  "answer": "Mount Everest"
},
{
  "question": "What is the name of the world's most populous country?",
  "choices": ["China", "India", "United States", "Indonesia"],
  "answer": "China"
},
{
  "question": "What is the biggest Arabic country?",
  "choices": ["Algeria ", "Egypt", "Saudi Arabia", "Morocco"],
  "answer": "Algeria"
},
{
  "question": "What is the sum of 1 and 1?",
  "choices": [0, 1, 2, 3],
  "answer": 2
},
{
  "question": "What is the product of 2 and 2?",
  "choices": [0, 1, 2, 4],
  "answer": 4
},
{
  "question": "What is the quotient of 4 divided by 2?",
  "choices": [0, 1, 2, 4],
  "answer": 2
},
{
  "question": "What is the difference of 6 and 2?",
  "choices": [0, 1, 2, 4],
  "answer": 4
},
{
  "question": "What is the square root of 16?",
  "choices": [2, 4, 8, 16],
  "answer": 4
},
{
  "question": "What is a * of 5 to 9?",
  "choices": [45, 4, 8, 16],
  "answer": 45
},
];


//global variables
const mainDiv = document.getElementById("mainDiv");
const resultDiv = document.getElementById("resultDiv");
const questionNumberText = document.getElementById("questionNumberText");
const scoreNumberText = document.getElementById("scoreNumberText");
const answers = document.getElementsByClassName("answerDiv");
const nextButton = document.getElementById("nextButton");
const questionDiv = document.getElementById("questionDiv");
const resultText = document.getElementById("resultText");
const resultScore = document.getElementById("resultScore");

const correctAudio = new Audio("https://tatbeqak.site/debug/tada.mp3");
const wrongAudio = new Audio("https://tatbeqak.site/debug/wrong.mp3");


var questionNumber = 0;
var selectedAnswer = "";
var score = 0;

var currentQuestion = 0;

var loadedQuestions = [];

loadQuestion();


for (let index = 0; index < answers.length; index++) {
  const element = answers[index];
  element.addEventListener("click", function(){
      clearSelection();
      element.style.backgroundColor = "yellow";
      element.style.color = "red";
      selectedAnswer = element.innerText;
      nextButton.style.display = "block";
  });
}

function clearSelection() {
  for (let index = 0; index < answers.length; index++) {
      const element = answers[index];
      element.style.backgroundColor = "";
      element.style.color = "red";
  }
}

function loadQuestion() {

  if(questionNumber < 10) {

    currentQuestion = Math.random() * questionsBank.length;
    currentQuestion = Math.floor(currentQuestion);

    while (loadedQuestions.includes(currentQuestion)) {
      currentQuestion = Math.random() * questionsBank.length;
      currentQuestion = Math.floor(currentQuestion);
    }

    loadedQuestions.push(currentQuestion);

    questionDiv.innerText = questionsBank[currentQuestion].question;


      for (let index = 0; index < answers.length; index++) {
          const element = answers[index];
          element.innerText = questionsBank[currentQuestion].choices[index];
      }

      questionNumberText.innerText = questionNumber + 1;


  } else {
    mainDiv.style.display = "none";
    resultDiv.style.display = "block";
    if(score > 6){
      resultText.innerText = "Good Job";
    } else {
      resultText.innerText = "Try Again";
    }
    resultScore.innerText = `${score}/10`;
  }

  nextButton.style.display = "none";
}



function checkAnswer() {
  const result = selectedAnswer == questionsBank[currentQuestion].answer;


  if(result){
      score++;
      scoreNumberText.innerText = score;
      correctAudio.currentTime = 0;
      correctAudio.play();
  } else {
    wrongAudio.currentTime = 0;
    wrongAudio.play();
  }

  questionNumber++;

  clearSelection();

  loadQuestion();
}

function playAgain() {
questionNumber = 0;
score = 0;
questionNumberText.innerText = questionNumber + 1;
scoreNumberText.innerText = score;
mainDiv.style.display = "block";
resultDiv.style.display = "none";
loadQuestion();
}
const colorInput = document.getElementById("colorInput");

const colorResult = document.getElementById("colorResult");

const body = document.body;

colorInput.addEventListener("click",  function () {
    body.style.backgroundColor = colorInput.value;
});