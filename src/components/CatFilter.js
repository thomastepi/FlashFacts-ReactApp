import { CATEGORIES } from "../assets/data";

export default function CatFilter({ setCurrentCategory }) {
  return (
    <aside>
      <ul>
        <li className="category">
          <button
            onClick={() => {
              setCurrentCategory("all");
            }}
            className="btn btn-all-categories"
          >
            All
          </button>
        </li>
        {CATEGORIES.map((item) => {
          return (
            <li key={item.name} className="category">
              <button
                className="btn btn-category"
                style={{ backgroundColor: item.color }}
                onClick={() => {
                  setCurrentCategory(item.name);
                }}
              >
                {item.name}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
