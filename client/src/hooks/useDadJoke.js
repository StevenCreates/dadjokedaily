import React from "react";

export default async () => {
  const [dadJoke, setDadJoke] = React.useState("");
  try {
    const res = await fetch(
      "https://cors-anywhere.herokuapp.com/https://icanhazdadjoke.com/",
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "User-Agent":
            " My Library (https://github.com/StevenCreates/dadjokedaily)",
        },
      }
    );
    const json = await res.json();
    setDadJoke(json);
  } catch (error) {
    console.log(error);
  }

  return dadJoke;
};
