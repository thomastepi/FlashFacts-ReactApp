import logo from "./assets/logo.png";
import supabase from "./assets/supabase";
import "./assets/App.css";
import Header from "./components/Header";
import CatFilter from "./components/CatFilter";
import NewFactForm from "./components/NewFactForm";
import FactList from "./components/FactList";
import Loader from "./components/Loader";
import Footer from "./components/Footer";
import { CATEGORIES } from "./assets/data";
import { useEffect, useState } from "react";

function App() {
  const [Facts, setFacts] = useState([]);
  const [Categories] = useState(CATEGORIES);
  const [toggleForm, setToggleForm] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [currentCategory, setCurrentCategory] = useState("all");

  useEffect(() => {
    async function getFacts() {
      setIsLoading(true);

      let query = supabase.from("flashFacts").select("*");
      if (currentCategory !== "all") {
        query = query.eq("category", currentCategory);
      }

      const { data: flashFacts, error } = await query
        .order("voteInteresting", { ascending: false })
        .limit(1000);

      // handle Error
      if (error) {
        alert("There was a problem getting data");
      } else {
        setFacts(flashFacts);
      }

      setIsLoading(false);
    }
    getFacts();
  }, [currentCategory]);

  return (
    <div>
      <Header
        logo={logo}
        toggleForm={() => {
          setToggleForm(!toggleForm);
        }}
        toggle={toggleForm}
      />
      {toggleForm ? (
        <NewFactForm
          setFacts={setFacts}
          toggleForm={() => setToggleForm(false)}
        />
      ) : (
        ""
      )}
      <main className="main">
        <CatFilter setCurrentCategory={setCurrentCategory} />
        {isLoading ? (
          <Loader />
        ) : (
          <FactList
            currentCategory={currentCategory}
            facts={Facts}
            categories={Categories}
            setFacts={setFacts}
          />
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;
