document.addEventListener("DOMContentLoaded", function() {

const watchData = [
    {
      model: "Patek Phillipe Nautilus",
      imageSrc: "assets/Patek_Phillipe_Nautilus.png",
      answerImageSrc: "assets/Patek_Phillipe_Nautilus_OG.png"
    },
    {
      model: "Rolex Day-Date",
      imageSrc: "assets/Rolex_Day-Date.png",
      answerImageSrc: "assets/Rolex_Day-Date_OG.png"
    }
  ];
  
  const solutionContainer = document.getElementById("solution-container");
  const quizContainer = document.querySelector("body");
  const watchImage = document.querySelector("#watch-image");
  const userAnswerInput = document.getElementById("user-answer");
  const submitButton = document.getElementById("submit-btn");
  let currentQuestionIndex = 0;
  let score = 0;
  
  function displayQuestion() {
    const currentQuestion = watchData[currentQuestionIndex];
    watchImage.src = currentQuestion.imageSrc;
    quizContainer.style.backgroundColor = "black"; // Reset background color
    userAnswerInput.value = ""; // Clear input field
  }
  
  function showAnswer(isCorrect) {
    const currentQuestion = watchData[currentQuestionIndex];
    watchImage.src = currentQuestion.answerImageSrc;
    
    if (isCorrect) {
      quizContainer.style.backgroundColor = "green"; // Correct answer: green background
      solutionContainer.style.display = "block";
      
    } else {
      quizContainer.style.backgroundColor = "red"; // Wrong answer: red background
      solutionContainer.style.display = "block";
    }
    
    setTimeout(() => {
      quizContainer.style.backgroundColor = "black"; // Reset background color to white
      currentQuestionIndex++;
      if (currentQuestionIndex < watchData.length) {
        displayQuestion();
      } else {
        // Display final score or end of the quiz message
      }
    }, 5000); // Transition to the next question after 5 seconds
  }
  
  function checkAnswer() {
    const currentQuestion = watchData[currentQuestionIndex];
    const userAnswer = userAnswerInput.value.trim().toLowerCase(); // Normalize input
    const actualModel = currentQuestion.model.toLowerCase();
    
    if (userAnswer === actualModel) {
      score++;
      showAnswer(true); // Correct answer
    } else {
      showAnswer(false); // Wrong answer
    }
  }
  
  submitButton.addEventListener("click", () => {
    event.preventDefault()
    checkAnswer();
  });
  
  // Start the quiz
  displayQuestion();


});