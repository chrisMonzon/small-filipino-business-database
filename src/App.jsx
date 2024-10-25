// import './App.css';
import Header from "./Header.jsx"
import Main from "./Main.jsx"
import Footer from "./Footer.jsx"
import Filter_Bar from "./Filter_Bar.jsx";

function App() {
  return (
    <div className='background'>
      <Header/>
      {/* <Filter_Bar/> */}
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
