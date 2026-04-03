import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import { Welcome } from './components/Welcome';
import { HashRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
            <Route path="/" element={<Login/>}></Route>
            <Route path="/welcome" element={<Welcome/>}></Route>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
