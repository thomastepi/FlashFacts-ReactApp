const btn = document.querySelector(".btn-open");
const form = document.querySelector(".fact-form");
const factsList = document.querySelector(".facts-list");

// Create DOM elements: Render facts in list
//factsList.innerHTML = "";

btn.addEventListener("click", () => {
  if (form.classList.contains("hidden")) {
    form.classList.remove("hidden");
    btn.textContent = "CLOSE";
  } else {
    form.classList.add("hidden");
    btn.textContent = "SHARE A FACT";
  }
});

const CATEGORIES = [
    { name: "technology", color: "#3b82f6" },
    { name: "science", color: "#16a34a" },
    { name: "finance", color: "#ef4444" },
    { name: "society", color: "#eab308" },
    { name: "entertainment", color: "#db2777" },
    { name: "health", color: "#14b8a6" },
    { name: "history", color: "#f97316" },
    { name: "news", color: "#8b5cf6" },
  ];

  function createFactsList(dataArray) {
    const htmlArr = dataArray.map(
      (fact) => `<li class="fact">
      <p>
      ${fact.text}
        <a
          class="source"
          href="${fact.source}"
          target="_blank"
        >(Source)</a>
      </p>
      <span class="tag" style="background-color: ${
        CATEGORIES.find((cat) => cat.name === fact.category).color
      }">${fact.category}</span>
    </li>`
    );
    const html = htmlArr.join("");
    factsList.insertAdjacentHTML("afterbegin", html);
  }

// load data from supabase
async function loadFacts() {
    const res = await fetch("https://rrukqmgsobjcsljwonfv.supabase.co/rest/v1/world-facts", {
  headers: {
    apikey:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJydWtxbWdzb2JqY3NsandvbmZ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTAxMTIwMDcsImV4cCI6MjAwNTY4ODAwN30.GAUm0g3DrjZ1u4-bFA2NYbOjAg_rUrnIBVhKKSKmGYE",
    authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJydWtxbWdzb2JqY3NsandvbmZ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTAxMTIwMDcsImV4cCI6MjAwNTY4ODAwN30.GAUm0g3DrjZ1u4-bFA2NYbOjAg_rUrnIBVhKKSKmGYE"
  },
});
const data = await res.json()
createFactsList(data)
}

loadFacts()






