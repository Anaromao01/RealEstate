import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Residencies from "./components/Residencies/Residencies";
/*import './App.css'*/
import Companies from "./components/companies/companies";

function App() {
 
  return (
   <><div className="App">
      <div className="white-gradient" />
      <Header />
      <Hero />
    </div>
    <Companies />
    <Residencies />
    </>
   
  );
}

export default App;
