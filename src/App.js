import React, {useState, useEffect} from 'react';
import Questionaire from './components/Questionaire';


const API_URL="https://opentdb.com/api.php?amount=10";

function App() {

  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [gameEnd, setgameEnd] = useState(false);


useEffect(() => {
  fetch(API_URL).then(res => res.json()).then((data) => {
    console.log(data);
    setQuestions(data.results);
  });
}, [])

const handleAnswer = (answer) => {

const newIndex= currentIndex+1
setCurrentIndex(currentIndex+1);
if(answer === questions[currentIndex].correct_answer){
  setScore(score+1);
}
if(newIndex >= questions.length){
  setgameEnd(true);
}
};
  return gameEnd ? (
    <div>
      <h1 className="text-3xl bg-purple-500 p-5 rounded-lg text-white">Quiz ended! Your score is {score}!</h1>
    </div>
  ): (questions.length > 0) ?
  (

    <div className="container ">
    <Questionaire 
     data={questions[currentIndex]}
    handleAnswer={handleAnswer}
    />
    
    </div>
   
  ):
  (<h1 className="text-3xl text-purple-500">Loading...</h1>)
}

export default App;
