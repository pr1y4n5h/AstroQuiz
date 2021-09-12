import React, { useEffect } from 'react';
import {QuizList} from "../../Components/QuizCard/QuizCard"
import { useQuiz } from '../../Contexts/QuizContext';


export const QuizDashboard = () => {

    const { dispatch } = useQuiz();

    useEffect(() => {
        dispatch({type: "RESET_STATE"})
    }, [])

    return (
        <div className="">
            <QuizList />
        </div>
    )
}

