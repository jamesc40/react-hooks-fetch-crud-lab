import React, { useState, useEffect } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

const url =  "http://localhost:4000/questions";

function App() {
  const [page, setPage] = useState("List");
  const [questions, setQuestions] = useState([]);

  const handleSetQuestions = (question) => setQuestions([...questions, question])

  const handleDeleteQuestion = (id) => {
    fetch(`${url}/${id}`, {
      method: 'DELETE'
    })
    .then(r => r.json())
    .then(() => setQuestions(questions.filter(question => question.id !== id)))
  }

  const handleChangeQueston = (update) => setQuestions(questions.map(question => question.id === update.id ? update : question))

  useEffect(() => {
    fetch(url)
    .then(r => r.json())
    .then(data => setQuestions(data));
  }, []);

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm handleSetQuestions={handleSetQuestions} url={url}/> : 
      <QuestionList questions={questions} handleDeleteQuestion={handleDeleteQuestion} handleChangeQuestion={handleChangeQueston}url={url}/>}
    </main>
  );
}

export default App;
