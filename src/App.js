import './App.css';
import Home from './Home';
import SignUp from './SignUp';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
     <Router>
      <Routes>
          <Route path="/" element={< Home/>}/>
          <Route  path ="/SignUp" element={<SignUp/>} />
        </Routes>
    </Router>
    </div>
  );
}

export default App;
