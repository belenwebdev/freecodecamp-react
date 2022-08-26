import React from "react"
import {nanoid} from "nanoid"
import Question from "./Question"
import Confetti from 'react-confetti'

function Game(){
    
    const [questions, setQuestions] = React.useState([]);
    const [score, setScore] = React.useState(0);
    const [missingAnswers, setMissingAnswers] = React.useState(false);
    const [showResults, setShowResults] = React.useState(false);
    
    React.useEffect(function() {
        getNewQuestions()
    }, [])
    
    function getNewQuestions(){
        fetch("https://opentdb.com/api.php?amount=5&category=9&difficulty=easy&type=multiple")
            .then(res => res.json())
            .then(data => setQuestions( data.results.map(question => {
                return {...question, id: nanoid()} 
            })))
    }
    
    function selectAnswer(questionId,answer){
        setQuestions(prevQuestions=>{
            return prevQuestions.map( question=>{
                return question.id===questionId 
                    ? {...question, selectedAnswer:answer, isCorrect:answer===question.correct_answer} 
                    : question;
            });
        }); 
    }
    
    React.useEffect(function(){
        const totalQuestions = questions.length;
        const withSelectedAnswer = questions.filter(question=>question.selectedAnswer).length;
        setMissingAnswers(totalQuestions>withSelectedAnswer);
    },[questions])
    
    const questionElements = questions.map(question => {
        return <Question item={question} key={question.id} selectAnswer={selectAnswer} isSubmitted={showResults} />
    })
    // handleClick={handleClick(answer)}
    
    function checkResults(){
        if(showResults){
            startGame();
            return;
        }
        setShowResults(true)
        setScore(questions.filter(question=>question.isCorrect).length)
    }
    
    function startGame(){
        setQuestions([])
        setShowResults(false)
        setMissingAnswers(true)
        setScore(0)
        getNewQuestions()
    }
    
    return (
        <main className={showResults?'show-results':'hide-results'}>
            {showResults && score===questions.length && <Confetti />}
            {questionElements}
            {questions.length==0 && <h1>Loading...</h1>}
            {questions.length>0 && <div className="btn-wrapper">
                {showResults && <h3>You scored {score}/{questions.length} correct answers</h3>}
                <button className="btn" onClick={checkResults} disabled={missingAnswers}>
                    {showResults ? 'New game' : 'Check answers'}
                </button>
            </div>}
        </main>
    )
}

export default Game
