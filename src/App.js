//import react-routing
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
//import react component
import MainPage from "./Pages/MainPage";

function App() {

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<MainPage/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;