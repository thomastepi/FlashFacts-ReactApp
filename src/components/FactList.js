import "../assets/App.css";
import { Link } from "react-router-dom";

export default function FactList({ facts, categories }) {
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
                ).color
              }}
            >
              {item.category}
            </span>
            <div className="vote-buttons">
                <button>👍 {item.votesInteresting} </button>
                <button>🤯 {item.votesMindblowing} </button>
                <button>⛔️ {item.votesFalse} </button>
            </div>
          </li>
        );
      })}
      <p>There are {facts.length} items in the facts. Add yours!</p>
    </section>
  );
}
