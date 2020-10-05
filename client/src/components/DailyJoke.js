import React from "react";
import styled from "styled-components";
import Refresh from "../assets/images/Refresh";
import firebase from "firebase";

export default function DailyJoke() {
  const [dadJoke, setDadJoke] = React.useState({});
  const db = firebase.firestore();

  const addFavorite = () => {
    db.collection("favorites").add({
      favorite: dadJoke,
      likes: 1,
    });
  };

  const DailyStyles = styled.div`
    text-align: center;
    margin-top: 2.5rem;
    color: #f4f3f3;
    font-size: 24px;
    background: #7f8994;
    margin-left: 7rem;
    margin-right: 7rem;
    border-radius: 8px;
    padding-top: 1rem;
    padding-bottom: 1rem;
  `;

  const ButtonStyles = styled.div`
    max-width: 3rem;
    max-height: 5rem;
    position: absolute;
    margin-left: 4rem;
    color: #dfbb4f;
    :hover {
      color: #f4f3f3;
      transform: rotate(90deg);
      transition-duration: 1s;
    }
  `;

  const AddFavoriteStyles = styled.div`
    text-align: center;
    padding-top: 0.5rem;
  `;

  const AddButtonStyles = styled.button`
    background: #43434d;
    color: white;
    border: solid #dfbb4f;
    border-radius: 7px;
    padding: 0.5rem 1rem 0.5rem 1rem;
    margin: 10px;
    font-size: 12px;
    :disabled {
      opacity: 0.4;
    }
    :hover {
      box-shadow: 0 0 10px #dfbb4f;
    }
  `;

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
      <ButtonStyles onClick={getDadJoke}>
        <Refresh />
      </ButtonStyles>

      <DailyStyles>
        <span>{dadJoke.joke}</span>
      </DailyStyles>
      <AddFavoriteStyles>
        <AddButtonStyles type='button' onClick={addFavorite}>
          Add to community Favorite?
        </AddButtonStyles>
      </AddFavoriteStyles>
    </>
  );
}
