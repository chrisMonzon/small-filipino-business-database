// import './App.css';
import Header from "./Header.jsx"
import Main from "./Main.jsx"
import Footer from "./Footer.jsx"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login.jsx";

function App() {
  return (
    <div className="background">
      <Header />
      <Main />
      <Footer />
      <Login/>
    </div>
  );
}

export default App;
