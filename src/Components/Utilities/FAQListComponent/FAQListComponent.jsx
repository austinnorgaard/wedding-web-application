import '../../../Styles/CSS/FAQListComponent.css';
import React from 'react';
import faqlist from "../../../Resources/Other/faqlist.txt";
import { useState } from 'react';

function FAQList() {
  const [faqtext, setText] = useState("");
  const ceremonyTime = "3:30";
  var questionList = [""];
  var answerList = [""];
  var questions = [];
  var answers = [];
  var isQuestion = true;
  var questionCount = 1;

  fetch(faqlist)
  .then(r => r.text())
  .then(text => {
    setText(text);
  });

  for (let i = 0; i < faqtext.length; i++) {
    if (isQuestion && faqtext[i] !== "\n") {
      questionList[questionCount - 1] += faqtext[i];
    }
    else if (!isQuestion && faqtext[i] !== "\n") {
      answerList[questionCount - 1] += faqtext[i];
    }
    if (faqtext[i] === "\n") {
      if (faqtext[i+1] === 'A') {
        isQuestion = !isQuestion;
      }
      else if (faqtext[i+1] === "Q") {
        ++questionCount;
        isQuestion = !isQuestion;
      }
      else if (faqtext[i+1] === "\n") {
        i = i+1;
      }
    }
  }

  for (let i = 0; i < questionCount; i++) {
    questionList[i] = questionList[i].replace("undefined", "");
    questionList[i] = questionList[i].replace("Q - ", "");
    answerList[i] = answerList[i].replace("undefined", "");
    answerList[i] = answerList[i].replace("A - ", "");
    answerList[i] = answerList[i].replace("__", ceremonyTime);
  }

  questions.push(questionList);
  answers.push(answerList);

  console.log(questions);
  console.log(answers);

  return (
    <div className="FAQList">
      
      <div className="MainContainer" id="FAQListMainContainer">
        <div className="QuestionsContainer">
          <div className="FaqHeader" id="faqHead">
            <div id="faqHeaderImage">
              <h1 id="FAQTitle">Frequently Asked Questions (FAQs)</h1>
            </div>
          </div>
          <div className='OrderedList' id="questionsList">
          {questionList.map((question, key) => (
            <div className="QuestionBox" id={"Question"+key} key={key}>
              <h3 className="Question">{question}</h3>
              <p className="Answer">{answerList[key]}</p>
            </div>
          ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQList;