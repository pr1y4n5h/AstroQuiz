import "./home.style.css";
import { useNavigate } from "react-router";
import { Button } from "@material-ui/core";

export const Home = () => {
  const navigate = useNavigate();

  const goToQuiz = () => {
    navigate("/quiz");
  };

  return (
    <div className="home-page">
      <header>
        <div className="header-content">
          <h2> Show your Geeky side with</h2>
          <div className="line"> </div>
          <h1> AstroQuiz </h1>
          <Button onClick={goToQuiz} variant="contained" color="secondary">
            Let's Play
          </Button>
        </div>
      </header>
    </div>
  );
};
