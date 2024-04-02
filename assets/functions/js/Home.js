import { watchData } from './watchData.js';

document.addEventListener("DOMContentLoaded", function() {

  let hasShownEachWatch = false;
  const quizContainer = document.querySelector("#watchimg");
  const watchImage = document.querySelector("#watch-image");
  const userAnswerInput = document.getElementById("#user-answer");
  const submitButton = document.getElementById("submit-btn");
  const scoreElement = document.getElementById("score");
  const highScoreElement = document.getElementById("highscore");
  let highScore = localStorage.getItem("highScore");
  let currentQuestionIndex = 0;
  let score = 0;

  if (highScore === null) {
    highScore = 0;
    localStorage.setItem("highScore", highScore);
  }
  
  function shuffle(watchData) {
    console.log("Array shuffled");
    if (!hasShownEachWatch) {
        for (let i = watchData.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [watchData[i], watchData[j]] = [watchData[j], watchData[i]];
        }
        hasShownEachWatch = true;
    } else {
        watchData.sort(() => Math.random() - 0.5);
    }
}



function updateHighScore(newScore) {
  if (newScore > highScore) {
    highScore = newScore;
    localStorage.setItem("highScore", highScore);                                                                               
    highScoreElement.textContent = highScore; 
  }
}




  function shuffleafterround() {
    if (currentQuestionIndex == 0) {
      shuffle(watchData);         
    } else {                                                                                
      
    }
  }

  function updateSolutionText(text) {
    const solutionText = document.getElementById("solution-text");
    solutionText.textContent = text;
  }

  function displayQuestion() {
    updateSolutionText("Real Watch Name");
    const solutionText = document.getElementById("solution-text");
    solutionText.style.color = "white"; 
    shuffleafterround()
    const currentQuestion = watchData[currentQuestionIndex];
    watchImage.src = currentQuestion.imageSrc;
    quizContainer.style.backgroundColor = "black";
    userAnswerInput.value = "";
    highScoreElement.textContent = highScore;
  }
  
  function showAnswer(isCorrect) {
    const currentQuestion = watchData[currentQuestionIndex];
    watchImage.src = currentQuestion.answerImageSrc;
  
    if (isCorrect) {
      quizContainer.style.backgroundColor = "green";
      const solutionText = document.getElementById("solution-text");
      solutionText.style.color = "green"; 
      score = score + 1;
      updateSolutionText(currentQuestion.model); 
      updateScore(); 
      updateHighScore(score); 
      console.log("Score updated to:", score); 
    } else {
      quizContainer.style.backgroundColor = "red";
      const solutionText = document.getElementById("solution-text");
      solutionText.style.color = "red"; 
      updateSolutionText(currentQuestion.model); 
      score = 0; 
      updateScore(); 
    }
  
    setTimeout(() => {
      
      quizContainer.style.backgroundColor = "black";
      currentQuestionIndex++;
  
      if (currentQuestionIndex < watchData.length) {
        displayQuestion();
      } else {
        
        currentQuestionIndex = 0; 
        displayQuestion();
      }
    }, 1000);
  }
  

  function checkAnswer() {
    const currentQuestion = watchData[currentQuestionIndex];
    const userAnswer = userAnswerInput.value.trim().toLowerCase();
    console.log("User input after trimming and lowercase:", userAnswer); 
    const actualModels = currentQuestion.acceptableAnswers.map(answer => answer.toLowerCase());
  
    if (actualModels.includes(userAnswer)) {
      showAnswer(true); 
    } else {
      showAnswer(false); 
    }
  }
  
  submitButton.addEventListener("click", (event) => {
    event.preventDefault();
    checkAnswer();
  });


  function updateScore() {
    const scoreElement = document.getElementById("score");
    scoreElement.textContent = score;
  }



  displayQuestion();

});
