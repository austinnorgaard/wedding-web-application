'use client';

import '@/app/ui/Styles/CSS/FAQListComponent.css';
import faqlist from "@/app/ui/Resources/Other/faqlist.json";
import { useState, useEffect } from 'react';

export default function FAQList() {
  const [faqtext, setText]: any = useState("");
  const ceremonyTime: any = "3:30";
  var questionList: any = [""];
  var answerList: any = [""];
  var questions: any = [];
  var answers: any = [];
  var isQuestion: any = true;
  var questionCount: any = 1;

  useEffect(() => {
    setText(faqlist.text);
  }, [faqtext])

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
          {questionList.map((question: any, key: any) => (
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