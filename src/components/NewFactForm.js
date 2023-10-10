import { useState } from "react";
import { CATEGORIES } from "../assets/data";

export default function NewFactForm( {setFacts, toggleForm} ) {
  const [text, setText] = useState("");
  const [source, setSource] = useState("http://www.example.com");
  const [category, setCategory] = useState("");
  const [Categories, setCategories] = useState(CATEGORIES)

  var textCount = text.length;

  function isValidHttpUrl(string) {
    let url;

    try {
      url = new URL(string);
    } catch (_) {
      return false;
    }

    return url.protocol === "http:" || url.protocol === "https:";
  }

  function handleSubmit(e) {
    // prevent event default behavior
    e.preventDefault();

    // validate entries and create new flashfact
    if (text && isValidHttpUrl(source) && category && textCount <= 200) {
      const newFact = {
        id: (Math.floor(Math.random)) * 1000,
        text,
        source,
        category,
        votesInteresting: 0,
        votesMindblowing: 0,
        votesFalse: 0,
        createdIn: new Date().getFullYear,
      };
    
      // update fact list
      setFacts((prevFact) => [newFact, ...prevFact])

      // reset entry fields to default
      setText('');
      setSource("http://www.example.com");
      setCategory('')

      // hide form after posting new flashfact
      toggleForm()
    }
  }
  return (
    <form onSubmit={handleSubmit} className="fact-form">
      <input
        type="text"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
        placeholder="Share a flashfact..."
      />
      <span>{200 - textCount}</span>
      <input
        type="text"
        value={source}
        onChange={(e) => {
          setSource(e.target.value);
        }}
        placeholder="Trustworthy source..."
      />
      <select
        value={category}
        onChange={(e) => {
          setCategory(e.target.value);
        }}
      >
        <option value="">Choose category:</option>
        {Categories.map((item) => {
          return (
            <option key={item.name} value={item.name}>
              {item.name}
            </option>
          );
        })}
      </select>
      <button className="btn btn-large">Post</button>
    </form>
  );
}
