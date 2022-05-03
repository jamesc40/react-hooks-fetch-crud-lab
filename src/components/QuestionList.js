import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({ questions, handleDeleteQuestion, handleChangeQuestion, url }) {

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {questions.map(question => {
          return(
            <QuestionItem 
              key={question.id}
              question={question}
              handleDeleteQuestion={handleDeleteQuestion}
              handleChangeQuestion={handleChangeQuestion}
              url={url}
            />
          )
        })}
      </ul>
    </section>
  );
}

export default QuestionList;
