import React from 'react'
import { IQuestion } from '../models/QuestionRule'

interface Props {
  question: IQuestion;
  deleteQuestion(questionNameToDelete: any): void;
}

const QuestionAndRule = ({question, deleteQuestion}: Props) => {


  return (
    <div className="question">
        <div className="content">
          <span className="spanNumber">{question.fieldNumber}</span>
          <span>{question.questionName}</span>
        </div>
        <button onClick={() => {
          deleteQuestion(question.questionName)
        }}>Slet</button>
    </div>
  )
}

export default QuestionAndRule