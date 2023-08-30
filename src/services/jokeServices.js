export const getJoke = () => {
  return fetch("http://localhost:8088/jokes").then((response) =>
    response.json()
  );
};

let transientState = {
  joke: "",
  told: false,
};

export const postNewJoke = () => {
  if (transientState.joke != "" && transientState.told === true) {
    const postOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(transientState),
    };
    fetch("http://localhost:8088/jokes", postOptions);
  }
  transientState = {
    joke: "",
    told: false,
  };
};
