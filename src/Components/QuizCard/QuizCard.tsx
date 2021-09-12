import React from "react";
import { Quiz } from "../../Quizdata/quizData.type";
import { Link } from "react-router-dom";
import { useQuiz } from "../../Contexts/QuizContext";
import "./CardStyle.css";

type QUIZCARD = {
  item: Quiz;
};

export const QuizCard = ({ item }: QUIZCARD) => {
  return (
    <>
      <Link to={`/quizzes/${item.id}`} className="no-underline">
        <div className="quiz-card">
          <div className="card-top">
            <img src={item.image} />
          </div>
          <div className="card-bottom">
              <h2> {item.name} </h2>
              <p> Unleash your Geeky side by taking this quiz </p>
              <p>Try to score a perfect {item.totalScore}!</p>
          </div>
        </div>
      </Link>
    </>
  );
};

export function QuizList() {
  const {
    state: { allQuizzes },
  } = useQuiz();

  return (
    <div className="quiz-categories">
      {allQuizzes?.map((quiz) => (
        <QuizCard item={quiz} />
      ))}
    </div>
  );
}
