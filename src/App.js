import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import { Welcome } from './components/Welcome';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <Login/> */}
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login/>}></Route>
            <Route path="/welcome" element={<Welcome/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
