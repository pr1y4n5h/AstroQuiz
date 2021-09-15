import './App.css';
import {Navbar} from "./Components/Navbar/Navbar";
import {Footer} from "./Components/Footer/Footer";
import {Home} from "./Pages/Home/Home"
import {Routes,Route} from 'react-router-dom';
import {QuizDashboard} from "./Pages/QuizDashboard/QuizDashboard"
import {Result} from "./Pages/Result/Result";
import {Quiz} from "./Pages/Quiz/Quiz"

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quiz" element={<QuizDashboard />} />
          <Route path="/quiz/:quizId" element={<Quiz />} />
          <Route path="/result" element={<Result />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App;
