import axios from "axios";

export const getAllQuizzes = async () => {
  try {
    const response = await axios.get(
      "https://astroquiz-backend.pr1y4n5h.repl.co/quiz"
    );
    if (response.data.success) {
      return response.data.quizdata;
    }
  } catch (error) {
    console.log(error);
    return null;
  }
};
