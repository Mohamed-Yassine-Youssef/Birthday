import "./App.css";
import List from "./components/List";
import Data from "./components/Data";
import { useState } from "react";
function App() {
  const [people, setPeople] = useState(Data);
  return (
    <main>
      <section className="container">
        <h3>{people.length} birthday today</h3>
        <List people={people} />
        <button
          onClick={() => {
            setPeople([]);
          }}
        >
          Clear All
        </button>
      </section>
    </main>
  );
}

export default App;
