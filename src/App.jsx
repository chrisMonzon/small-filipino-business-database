// import './App.css';
import Header from "./Header.jsx"
import Main from "./Main.jsx"
import Footer from "./Footer.jsx"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login.jsx";

function App() {
  return (
    <Router>
    <div className="background">
      {/* Header always shown */}
      <Header />

      <Routes>
        {/* Home page */}
        <Route path="/" element={<Main/>} />

        {/* Log in page */}
        <Route path="/login" element={<Login/>}/>

      </Routes>
      
      {/* Footer always shown */}
      <Footer />
      <Login/>
    </div>
    </Router>
  );
}

export default App;
