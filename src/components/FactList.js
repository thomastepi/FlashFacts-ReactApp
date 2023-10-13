import "../assets/App.css";
import { Link } from "react-router-dom";
import supabase from "../assets/supabase";

export default function FactList({ facts, categories, currentCategory, setFacts }) {
  async function handleVote(param) {
    const {data: factUpdate, error} = await supabase
      .from("flashFacts")
      .update({ voteInteresting: param.voteInteresting + 1 })
      .eq("id", param.id)
      .select();
      
      //if (error) {alert("There was an error performing this task")} else {setFacts((prevFacts) => {prevFacts.map(f) => f.id === param.id ? factUpdate : f})}
  }

  return (
    <section>
      {facts.map((item) => {
        return (
          <li className="fact" key={item.id}>
            <p>
              {item.text} <Link to={item.source}>(Source)</Link>
            </p>
            <span
              className="tag"
              style={{
                backgroundColor: categories.find(
                  (cat) => cat.name === item.category
                ).color,
              }}
            >
              {item.category}
            </span>
            <div className="vote-buttons">
              <button onClick={() => {handleVote(item)}}>👍 {item.voteInteresting} </button>
              <button>🤯 {item.voteMindBlowing} </button>
              <button>⛔️ {item.voteFalse} </button>
            </div>
          </li>
        );
      })}
      <p className="factListMessage">
        There is/are {facts.length} fact(s) in the feed
        {currentCategory !== "all" ? " on " + currentCategory + "." : "."} Add
        yours!
      </p>
    </section>
  );
}
