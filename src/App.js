import { useEffect, useState } from "react";
import "./App.css";
import { getJoke, postNewJoke } from "./services/jokeServices.js";
import stevePic from "./assets/steve.png";

export const App = () => {
  const [newJoke, setNewJoke] = useState("");
  const inputValue = "";
  const [allJokes, setAllJokes] = useState([]);
  const [untoldJokes, setUntoldJokes] = useState([]);
  const [toldJokes, setToldJokes] = useState([]);

  const HandlesJokeUpdate = () => {
    getJoke().then((jokesArray) => {
      setAllJokes(jokesArray);
    });
  };

  useEffect(() => {
    HandlesJokeUpdate();
  }, [newJoke]);

  useEffect(() => {
    const untoldJokesArray = allJokes.filter((joke) => joke.told === false);
    setUntoldJokes(untoldJokesArray);
    const toldJokesArray = allJokes.filter((joke) => joke.told === true);
    setToldJokes(toldJokesArray);
  }, [allJokes]);

  const handlesNewJokePost = () => {
    return newJoke !== ""
      ? postNewJoke(newJoke)
      : window.alert("Input field empty, must enter a joke");
  };

  return (
    <div className="app-container">
      <header className="app-heading">
        <div className="app-heading-circle">
          <img className="app-logo" src={stevePic} alt="Good job Steve" />
        </div>
        <h1 className="app-heading-text">Chuckles Checklist</h1>
      </header>
      <h2>Add Joke</h2>
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
        <button
          className="joke-input-submit"
          onClick={() => {
            handlesNewJokePost();
            setNewJoke(inputValue);
          }}
        >
          Add
        </button>
      </div>
      <div className="joke-lists-container">
        <article className="joke-list-container">
          <h2>
            Untold Jokes{" "}
            <span className="untold-count">{untoldJokes.length}</span>
          </h2>
          {untoldJokes.map((joke) => {
            return (
              <li className="joke-list-item" key={joke.id}>
                {joke.text}
              </li>
            );
          })}
        </article>
        <article className="joke-list-container">
          <h2>
            Told Jokes <span className="told-count">{toldJokes.length}</span>
          </h2>
          {toldJokes.map((joke) => {
            return (
              <li className="joke-list-item" key={joke.id}>
                {joke.text}
              </li>
            );
          })}
        </article>
      </div>
    </div>
  );
};
