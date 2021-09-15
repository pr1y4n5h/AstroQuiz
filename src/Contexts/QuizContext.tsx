import {
  createContext,
  FunctionComponent,
  useContext,
  useEffect,
  useReducer,
} from "react";
import { getAllQuizzes } from "../utils/getQuiz";
import { quizReducer, quizInitialState } from "../Reducer/quizReducer";
import { QUIZ_CONTEXT } from "./QuizContext.type";

const QuizContext = createContext<QUIZ_CONTEXT>({
  state: quizInitialState,
  dispatch: () => null
});


export const QuizProvider: FunctionComponent = ({ children }) => {

  const [state, dispatch] = useReducer(quizReducer, quizInitialState);

  async function initiateQuiz() {
    const allQuizzes = await getAllQuizzes();

    allQuizzes &&
      dispatch({
        type: "INITIALIZE_ALL_QUIZZES",
        payload: { allQuizzes },
      });
  }

  useEffect(() => {
    initiateQuiz();
  }, []);

  return (
    <QuizContext.Provider value={{ state, dispatch }}>
      {children}
    </QuizContext.Provider>
  );
};

export const useQuiz = () => useContext(QuizContext);
