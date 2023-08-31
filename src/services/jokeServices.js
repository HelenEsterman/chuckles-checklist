export const getJoke = () => {
  return fetch("http://localhost:8088/jokes").then((response) =>
    response.json()
  );
};

export const postNewJoke = async (jokeText) => {
  const transientState = { text: jokeText, told: false };
  const postOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(transientState),
  };
  await fetch("http://localhost:8088/jokes", postOptions);
};

export const markJokeAsTold = async (jokeText, apiLink) => {
  const transientState = { text: jokeText, told: true };
  const putOptions = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(transientState),
  };
  await fetch(apiLink, putOptions);
};

export const markJokeAsUntold = async (jokeText, apiLink) => {
  const transientState = { text: jokeText, told: false };
  const putOptions = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(transientState),
  };
  await fetch(apiLink, putOptions);
};
