import logo from "./assets/logo.png";
import "./assets/App.css";
import Header from "./components/Header";
import CatFilter from "./components/CatFilter";
import NewFactForm from "./components/NewFactForm";
import FactList from "./components/FactList"
import { CATEGORIES, initialFacts } from "./assets/data";
import { useState } from "react";


function App() {
  const [Facts, setFacts] = useState(initialFacts);
  const [Categories] = useState(CATEGORIES)
  const [toggleForm, setToggleForm] = useState(true)
  

  return (
    <div>
      <Header logo={logo} toggleForm={() => {setToggleForm(!toggleForm)}} toggle={toggleForm} />
      {toggleForm ? <NewFactForm setFacts={setFacts} toggleForm={() => setToggleForm(false)} /> : ''}
      <main className="main">
      <CatFilter />
      <FactList facts={Facts} categories={Categories} />
      </main>
    </div>
  );
}

export default App;
