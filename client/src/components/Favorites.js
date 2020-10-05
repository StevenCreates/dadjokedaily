import React from "react";
import styled from "styled-components";
import firebase from "firebase";

export default function Favorites() {
  const [favorites, setFavorites] = React.useState([]);
  const db = firebase.firestore();

  const FavoriteContainer = styled.div`
    margin-left: 7rem;
    margin-right: 7rem;
    border-radius: 8px;
    border: sold #7f8994;
  `;

  React.useEffect(() => {
    db.collection("favorites")
      .get()
      .then((querySnapshot) => {
        const data = querySnapshot.docs.map((doc) => doc.data());
        setFavorites(data); // array of favorite dad jokes
        console.log(data);
      });
  }, [db]);

  return (
    <FavoriteContainer>
      <span>Community Favorites</span>
      {favorites.map((joke) => (
        <div>{joke.favorite ? joke.favorite.joke : "waiting"}</div>
      ))}
    </FavoriteContainer>
  );
}
