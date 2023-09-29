import logo from "./assets/logo.png";
import "./assets/App.css";
import Header from "./components/Header";
import CatFilter from "./components/CatFilter";
import NewFactForm from "./components/NewFactForm";
import FactList from "./components/FactList"

function App() {
  return (
    <div>
      <Header logo={logo} />
      <NewFactForm className="fact-form"/>
      <main className="main">
      <CatFilter />
      <FactList />
      </main>
    </div>
  );
}

export default App;
