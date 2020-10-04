import React from "react";
import styled from "styled-components";

export default function DailyJoke() {
  const [dadJoke, setDadJoke] = React.useState({});

  const DailyStyles = styled.div`
    text-align: center;
    margin-top: 2.5rem;
    color: #f4f3f3;
    font-size: 24px;
    background: #7f8994;
    margin-left: 3rem;
    margin-right: 3rem;
  `;

  const ButtonStyles = styled.button``;

  const getDadJoke = async () => {
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
  };

  React.useEffect(() => {
    getDadJoke();
  }, []);

  return (
    <>
      <ButtonStyles></ButtonStyles>
      <DailyStyles>
        <span>{dadJoke.joke}</span>
      </DailyStyles>
    </>
  );
}
