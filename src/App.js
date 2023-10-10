import logo from "./assets/logo.png";
import supabase from "./assets/supabase";
import "./assets/App.css";
import Header from "./components/Header";
import CatFilter from "./components/CatFilter";
import NewFactForm from "./components/NewFactForm";
import FactList from "./components/FactList"
import { CATEGORIES, initialFacts } from "./assets/data";
import { useEffect, useState } from "react";


function App() {
  const [Facts, setFacts] = useState([]);
  const [Categories] = useState(CATEGORIES)
  const [toggleForm, setToggleForm] = useState(true)

  useEffect(() => {
   async function getFacts() {
    const { data: flashFacts, error } = await supabase
    .from('flashFacts')
    .select('*')
    console.log(flashFacts)
    setFacts(flashFacts)
   } 
   getFacts()

  }, []);
  

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
