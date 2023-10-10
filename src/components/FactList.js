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
                <button>👍 {item.voteInteresting} </button>
                <button>🤯 {item.voteMindBlowing} </button>
                <button>⛔️ {item.voteFalse} </button>
            </div>
          </li>
        );
      })}
      <p>There are {facts.length} facts in the feed. Add yours!</p>
    </section>
  );
}
