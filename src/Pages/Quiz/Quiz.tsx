import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useQuiz } from "../../Contexts/QuizContext";
import { Question, Options } from "../../Quizdata/quizData.type";
import "./quiz.style.css";

export const Quiz = () => {
  const { quizId } = useParams();
  const navigate = useNavigate();
  const [selectedOptionId, setSelectedOptionId] = useState("");
  const {
    state: { currentQuiz, questionNo, isClickEnabled, score },
    dispatch,
  } = useQuiz();

  const currentQuestion = currentQuiz?.questions[questionNo] as Question;

  useEffect(() => {
    dispatch({ type: "INITIALIZE_CURRENT_QUIZ", payload: { quizId } });
    return () => {};
  }, []);

  const updateQuestionAndScore = (option: Options) => {
    option.isCorrect
      ? dispatch({
          type: "INCREMENT_SCORE",
          payload: { score: currentQuestion?.score },
        })
      : dispatch({
          type: "DECREMENT_SCORE",
          payload: { score: currentQuestion?.negativeScore },
        });

    questionNo + 1 === currentQuiz?.questions.length
      ? navigate("/result", { replace: true })
      : dispatch({
          type: "INCREMENT_QUESTION_NO",
        });
  };

  const optionClickHandler = async (option: Options) => {
    setSelectedOptionId(() => option.id);
    dispatch({
      type: "SET_SELECTED_OPTION_ID",
      payload: { optionId: option.id, questionId: currentQuestion.id },
    });
    dispatch({ type: "DISABLE_CLICK" });
    setTimeout(() => {
      updateQuestionAndScore(option);
      dispatch({ type: "ENABLE_CLICK" });
    }, 2000);
  };

  return currentQuiz && currentQuestion ? (
    <div className="flex justify-center">
      <div className="quiz-box">
        <h1 className="my-4"> Welcome to {currentQuiz.name} Trivia! </h1>

        <p className="text-lg text-center">
          Question: {questionNo + 1} of {currentQuiz.questions.length}{" "}
        </p>
        <h2 className="mt-2 text-center text-xl">Score: {score}</h2>
        <h3 className="font-bold mt-8 mx-8 md:mx-16 text-lg">
      {currentQuestion.question}
        </h3>
        <div className="quiz-options">
          {currentQuestion.options.map(option => {
            return (
              <button
                disabled={!isClickEnabled}
                onClick={() => optionClickHandler(option)}
                className={`w-full md:w-2/5 rounded-xl text-white font-bold my-4 mx-2 py-4
                    bg-black transition-colors duration-200 ease-in ${
                      !isClickEnabled && option.isCorrect && "bg-green-500"
                    } ${
                  option.id === selectedOptionId &&
                  !option.isCorrect &&
                  !isClickEnabled &&
                  "bg-red-600"
                }`}
              >
              {option.option}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  ) : (
    <div></div>
  );
};
