import React from "react";
import styled from "styled-components";
import firebase from "firebase";

export default function Favorites() {
  const [favorites, setFavorites] = React.useState("");
  const db = firebase.firestore();

  React.useEffect(() => {
    db.collection("favorites")
      .get()
      .then((querySnapshot) => {
        const data = querySnapshot.docs.map((doc) => doc.data());
        setFavorites(data); // array of cities objects
      });
  }, [db]);
  return (
    <>
      {favorites.map((joke) => (
        <div>{joke.body}</div>
      ))}
    </>
  );
}
