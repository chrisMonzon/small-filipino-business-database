// import './App.css';
import Header from "./layouts/Header.jsx"
import Main from "./pages/Main.jsx"
import Footer from "./layouts/Footer.jsx"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./features/authentication/logging-in/Login.jsx";
import BusinessPageComponent from "./pages/BusinessPage_Component.jsx";
import SignUp from "./features/authentication/signing-in/SignUp.jsx";
// import BusinessList from "./BusinessList.jsx";

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

        <Route path="/business" element={<BusinessPageComponent/>}/>

        <Route path="/signup" element={<SignUp/>}/>

      </Routes>
      
      {/* Footer always shown */}
      <Footer/>
    </div>
    </Router>
  );
}

export default App;
