import { useEffect } from "react";
import { QuizList } from "../../Components/QuizCard/QuizCard";
import { useQuiz } from "../../Contexts/QuizContext";

export const QuizDashboard = () => {
  const { dispatch } = useQuiz();
  useEffect(() => {
    dispatch({ type: "RESET_STATE" });
  }, []);

  return (
    <div className="flex justify-around">
      <QuizList />
    </div>
  );
};
