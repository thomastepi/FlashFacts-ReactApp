import { useState } from "react";
import { CATEGORIES } from "../assets/data";
import supabase from "../assets/supabase";

export default function NewFactForm({ setFacts, toggleForm }) {
  const [text, setText] = useState("");
  const [source, setSource] = useState("http://www.example.com");
  const [category, setCategory] = useState("");
  const [Categories] = useState(CATEGORIES);
  const [isUploading, setIsUploading] = useState(false);

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

  async function handleSubmit(e) {
    // prevent event default behavior
    e.preventDefault();

    // validate entries and create new flashfact
    if (text && isValidHttpUrl(source) && category && textCount <= 200) {
      // upload fact to database and receive new fact object
      setIsUploading(true);
      const { data: newFact, error } = await supabase
        .from("flashFacts")
        .insert([{ text, source, category }])
        .select();
      setIsUploading(false);

      // handle error and update fact list
      if (error) {
        alert("There was a problem adding flashFact");
      } else {
        setFacts((prevFact) => [newFact[0], ...prevFact]);
      }

      // reset entry fields to default
      setText("");
      setSource("http://www.example.com");
      setCategory("");

      // hide form after posting new flashfact
      toggleForm();
    }
  }
  return (
    <form onSubmit={handleSubmit} className="fact-form">
      <input
        type="text"
        value={text}
        disabled={isUploading}
        onChange={(e) => {
          setText(e.target.value);
        }}
        placeholder="Share a flashfact..."
      />
      <span>{200 - textCount}</span>
      <input
        type="text"
        value={source}
        disabled={isUploading}
        onChange={(e) => {
          setSource(e.target.value);
        }}
        placeholder="Trustworthy source..."
      />
      <select
        value={category}
        disabled={isUploading}
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
      <button disabled={isUploading} className="btn btn-large">
        Post
      </button>
    </form>
  );
}
