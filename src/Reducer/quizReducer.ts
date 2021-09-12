import {Quiz} from "../Quizdata/quizData.type"


export type QUIZ_STATE_TYPE = {
    allQuizzes: Array<Quiz> | null;
    currentQuiz: Quiz | null;
    quizId: string;
    questionNo: number;
    score: number;
    isClickEnabled: boolean; 
  };
  
  export const quizInitialState: QUIZ_STATE_TYPE = {
    allQuizzes: null,
    currentQuiz: null,
    quizId: "", 
    questionNo: 0,
    score: 0,
    isClickEnabled: true,
  };

  export type ACTION =
  | { type: "RESET_STATE"; payload: { quizId: string } }
  | { type: "INITIALIZE_ALL_QUIZZES"; payload: { allQuizzes: Array<Quiz> } }
  | { type: "INITIALIZE_CURRENT_QUIZ"; payload: { quizId: string } }
  | {
      type: "SET_SELECTED_OPTION_ID";
      payload: { optionId: string; questionId: string };
    }
  | { type: "INCREMENT_SCORE"; payload: { score: number } }
  | { type: "DECREMENT_SCORE"; payload: { score: number } }
  | { type: "RESET_SCORE" }
  | { type: "INCREMENT_QUESTION_NO" }
  | { type: "RESET_QUESTION_NO" }
  | { type: "SET_QUIZ_ID"; payload: { quizId: string } }
  | { type: "ENABLE_CLICK" }
  | { type: "DISABLE_CLICK" };

  export const quizReducer = (
    state: QUIZ_STATE_TYPE,
    action: ACTION
  ): QUIZ_STATE_TYPE => {
    switch (action.type) {
      case "RESET_STATE":
        return {
          ...quizInitialState,
          allQuizzes: state.allQuizzes,
        };
  
      case "INITIALIZE_ALL_QUIZZES":
        return {
          ...state,
          allQuizzes: action.payload.allQuizzes,
        };
  
      case "INITIALIZE_CURRENT_QUIZ":
        const { quizId } = action.payload;
        const selectedQuiz: Quiz = state.allQuizzes?.find(
          (quiz) => quiz.id === quizId
        ) as Quiz;
        selectedQuiz.questions.forEach(
          (question) => (question.selectedOptionId = null)
        );
        return {
          ...state,
          currentQuiz: selectedQuiz,
        };
  
      case "SET_SELECTED_OPTION_ID":
        const { optionId, questionId } = action.payload;
        return {
          ...state,
          currentQuiz: {
            ...state.currentQuiz,
            questions: state.currentQuiz?.questions.map((question) => {
              return question.id === questionId
                ? {
                    ...question,
                    selectedOptionId: optionId,
                  }
                : question;
            }),
          } as Quiz,
        };
  
      case "INCREMENT_SCORE":
        return {
          ...state,
          score: state.score + action.payload.score,
        };
  
      case "DECREMENT_SCORE":
        return {
          ...state,
          score: state.score - action.payload.score,
        };
  
      case "RESET_SCORE":
        return {
          ...state,
          score: 0,
        };
  
      case "INCREMENT_QUESTION_NO":
        return {
          ...state,
          questionNo: state.questionNo + 1,
        };
  
      case "RESET_QUESTION_NO":
        return {
          ...state,
          questionNo: 0,
        };
    
      case "SET_QUIZ_ID":
        return {
          ...state,
          quizId: action.payload.quizId,
        };
  
      case "ENABLE_CLICK":
        return {
          ...state,
          isClickEnabled: true,
        };
  
      case "DISABLE_CLICK":
        return {
          ...state,
          isClickEnabled: false,
        };
      default:
        return state;
    }
  };
  