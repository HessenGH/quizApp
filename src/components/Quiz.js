
import { Questions } from "../helpers/Questions";
import { useState } from "react";
import { useContext } from "react";
import { GameStateContext } from "../helpers/Contexts";

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [optionChosen, setOptionChosen] = useState("");

  const { score, setScore, gameState, setGameState } = useContext(
    GameStateContext
  );

  const chooseOption = (option) => {
    setOptionChosen(option);
  };

  const nextQuestion = () => {
    if (Questions[currentQuestion].answer === optionChosen) {
      setScore(score + 1);
    }
    setCurrentQuestion(currentQuestion + 1);
    allWhite();
  //   if (Questions[currentQuestion].answer === optionChosen){
  //     var property = document.getElementById(btn);
  // property.style.backgroundColor="white";
  //   }
  };

  const finishQuiz = () => {
    if (Questions[currentQuestion].answer === optionChosen) {
      setScore(score + 1);
    }
    setGameState("finished");
  };

  const allWhite=()=>{
    var property = document.getElementById("btn1");
  property.style.backgroundColor="white";
  var property1 = document.getElementById("btn2");
  property1.style.backgroundColor="white";
  var property2 = document.getElementById("btn3");
  property2.style.backgroundColor="white";
  var property3 = document.getElementById("btn4");
  property3.style.backgroundColor="white";
  }
 const checkColor=(btn)=>{
if(btn==="btn1")
{
  colorblue("btn1")
  coloWhite("btn2")
  coloWhite("btn3")
  coloWhite("btn4")

}
if(btn==="btn2")
{
  colorblue("btn2")
  coloWhite("btn1")
  coloWhite("btn3")
  coloWhite("btn4")

}
if(btn==="btn3")
{
  colorblue("btn3")
  coloWhite("btn2")
  coloWhite("btn1")
  coloWhite("btn4")

}
if(btn==="btn4")
{
  colorblue("btn4")
  coloWhite("btn2")
  coloWhite("btn3")
  coloWhite("btn1")
}
 }
 
 const colorblue=(btn)=>{
  var property = document.getElementById(btn);
  property.style.backgroundColor="#985a5a";
 }
 const coloWhite=(btn)=>{
  var property = document.getElementById(btn);
  property.style.backgroundColor="white";
 }

  return (
    <div className="Quiz">
      <h1>{Questions[currentQuestion].prompt}</h1>
      <div className="questions">
        <button  id="btn1"
          onClick={() => {
            chooseOption("optionA");
            checkColor("btn1")
          }}
        >
          {Questions[currentQuestion].optionA}
        </button>
        <button id="btn2"
          onClick={() => {
            chooseOption("optionB");
            checkColor("btn2")
          }}
        >
          {Questions[currentQuestion].optionB}
        </button>
        <button id="btn3"
          onClick={() => {
            chooseOption("optionC");
            checkColor("btn3")
          }}
        >
          {Questions[currentQuestion].optionC}
        </button>
        <button id="btn4"
          onClick={() => {
            chooseOption("optionD");
            checkColor("btn4")
          }}
        >
          {Questions[currentQuestion].optionD}
        </button>
      </div>

      {currentQuestion === Questions.length - 1 ? (
        <button onClick={finishQuiz} id="nextQuestion">
          Finish Quiz
        </button>
      ) : (
        <button onClick={nextQuestion} id="nextQuestion">
          Next Question
        </button>
      )}
    </div>
  );
}

export default Quiz;
