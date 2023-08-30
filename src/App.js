import { useState } from "react";
import "./App.css";
import { getJoke, postNewJoke } from "./services/jokeServices.js";

export const App = () => {
  const [newJoke, setNewJoke] = useState("");

  return (
    <div className="app-container">
      <header className="app-heading">
        <h1 className="app-heading-text">Chuckles Checklist</h1>
      </header>
      <div className="joke-add-form">
        <input
          className="joke-input"
          type="text"
          value={newJoke}
          placeholder="New One Liner"
          onChange={(event) => {
            // What's the value of event?
            setNewJoke(event.target.value);
          }}
        />
      </div>
    </div>
  );
};
