import React from "react";
import { QUIZ_STATE_TYPE } from "../Reducer/quizReducer";

export type QUIZ_CONTEXT = {
  state: QUIZ_STATE_TYPE;
  dispatch: React.Dispatch<any>;
};