import React from "react";
import styled from "styled-components";
import DadJokes from "./components/DadJokes";
import Favorites from "./components/Favorites";

function App() {
  const AppStyles = styled.div`
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
    background: #dfbb4f;
    border-radius: 9px;
    padding: 1rem 2rem 1rem 2rem;
  `;

  return (
    <AppStyles>
      <TitleStyles>
        <SpanStyles>Daily Dad Joke</SpanStyles>
      </TitleStyles>
      <DadJokes />
      <Favorites />
    </AppStyles>
  );
}

export default App;
