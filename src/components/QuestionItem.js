// import { data } from "msw/lib/types/context";
import React from "react";

function QuestionItem({ question, handleDeleteQuestion, handleChangeQuestion, url }) {
  const { id, prompt, answers, correctIndex } = question;

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  const onDeleteClick = () => handleDeleteQuestion(id)

  const onAnswerChange = e => {
    fetch(`${url}/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ correctIndex: e.target.value })
    })
    .then(r => r.json())
    .then(data => handleChangeQuestion(data))
  }

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select defaultValue={correctIndex} onChange={onAnswerChange}>{options}</select>
      </label>
      <button onClick={onDeleteClick}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
