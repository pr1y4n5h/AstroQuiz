import { useQuiz } from '../../Contexts/QuizContext';
import "./result.style.css";

export const Result = () => {
    const {
        state: { score, currentQuiz },
      } = useQuiz();
      return (
        <div className="flex justify-center">
          <div className="result-box">
            <p className="text-2xl mt-8 font-bold text-center">
              Your Final Score is <em> {score} out of {currentQuiz?.totalScore} </em>
            </p>
            {currentQuiz?.questions.map((question) => (
              <div>
                <p className="font-bold mt-6 mx-10 md:mx-16 text-lg">Que : {question.question}</p>
                <div className="quiz-options">
                {question.options.map((option) => (
                    <p
                      className={`w-full md:w-2/5 text-center rounded-xl text-white font-bold my-4 mx-2 py-4
                      bg-black ${
                        option.isCorrect && "bg-green-500"
                      } ${
                        option.id === question.selectedOptionId &&
                        !option.isCorrect &&
                        "bg-red-600"
                      }`}
                    >
                      {option.option}
                    </p>
                ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      );
}
