import React from "react"
import {nanoid} from "nanoid"
import Answer from "./Answer"

export default function Question(props){
    
    const [answers, setAnswers] = React.useState(prepareAnswers());
    const [isCorrect, setIsCorrect] = React.useState(false);
    
    const answerElements = answers.map(answer => {
        return <Answer item={answer} key={answer.id} handleClick={()=>{selectAnswer(answer.id)}} decodeHtml={decodeHtml}/>
    });
    
    function prepareAnswers() {
        const answers = props.item.incorrect_answers.map(answer=>{
            return { text: answer, id: nanoid(), isSelected: false}
        });
        const rightAnswer = { text: props.item.correct_answer, id: nanoid(), isSelected: false };
        const randomPosition = Math.floor(Math.random() * (answers.length + 1));
        answers.splice(randomPosition, 0, rightAnswer);
        return answers;
    }
    
    function selectAnswer(id){
        if(props.isSubmitted) return;
        const selectedAnswer = answers.find(answer=>answer.id===id).text;
        setAnswers(oldAnswers => oldAnswers.map(answer => {
            if(answer.id===id) return {...answer, isSelected:!answer.isSelected}
            else if(answer.isSelected) return {...answer, isSelected:false}
            else return answer;
        }));
        setIsCorrect(selectedAnswer===props.item.correct_answer);
        props.selectAnswer(props.item.id, selectedAnswer);
    }
    
    function decodeHtml(html){
        const txt = document.createElement('textarea');
        txt.innerHTML = html;
        return txt.value;
    }
    
    return (
        <div className={`question ${isCorrect?'correct':'incorrect'}`}>
            <h2>{decodeHtml(props.item.question)}</h2>
            <div className="answers-wrapper">{answerElements}</div>
        </div>
    )
}