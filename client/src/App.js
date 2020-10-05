import React from "react";
import styled from "styled-components";
import DailyJoke from "./components/DailyJoke";
import Favorites from "./components/Favorites";

function App() {
  const AppStyles = styled.div`
    @import url("https://fonts.googleapis.com/css2?family=Gamja+Flower&display=swap");
    max-width: 1100px;
    height: 700px;
    margin: 6rem auto 6rem auto;
    background: #43434d;
    border-radius: 9px;
  `;

  const TitleStyles = styled.div`
    color: #f4f3f3;
    font-size: 36px;
    font-weight: 800;
    text-align: center;
  `;

  const SpanStyles = styled.span`
    font-family: "Gamja Flower", cursive;
    background: #dfbb4f;
    border-radius: 9px;
    padding: 1rem 2rem 1rem 2rem;
  `;

  // let Joke = useDadJoke();
  // console.log(Joke);

  return (
    <AppStyles>
      <TitleStyles>
        <SpanStyles>Dad Joke Daily</SpanStyles>
      </TitleStyles>
      <DailyJoke />
      <Favorites />
    </AppStyles>
  );
}

export default App;
