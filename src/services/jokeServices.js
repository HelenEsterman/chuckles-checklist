export const getJoke = () => {
  return fetch("http://localhost:8088/jokes").then((response) =>
    response.json()
  );
};

export const postNewJoke = (jokeText) => {
  const transientState = { text: jokeText, told: false };
  const postOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(transientState),
  };
  fetch("http://localhost:8088/jokes", postOptions);
};
