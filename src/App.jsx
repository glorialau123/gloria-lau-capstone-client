import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import SelectionsPage from "./pages/SelectionsPage/SelectionsPage";
// import LoginPage from "./pages/LoginPage/LoginPage";
import QuestionPage from "./pages/QuestionPage/QuestionPage";
import ScoresPage from "./pages/ScoresPage/ScoresPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          {/* <Route path="/" element={<LoginPage />} /> */}
          {/* changed landing pg to selections page; changed Links on scorespage, header to '/' */}
          {/*  store data frontend branch has not been merged with main*/}
          <Route path="/" element={<SelectionsPage />} />
          <Route path="/selections" element={<SelectionsPage />} />
          <Route path="/topic/:topicname/:id" element={<QuestionPage />} />
          <Route path="/topic/:topicname/score" element={<ScoresPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
