import React from "react";
import styled from "styled-components";
import firebase from "firebase";

export default function Favorites() {
  const [favorites, setFavorites] = React.useState([]);
  const db = firebase.firestore();

  const FavoriteContainer = styled.div`
    margin-left: 7rem;
    margin-right: 7rem;
    /* border-radius: 8px; */
    height: 30vh;
    max-height: 30vh;
    overflow-y: scroll;
  `;

  const CommunityDiv = styled.div`
    width: full;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    background: #dfbb4f;
    font-weight: 700;
    margin-bottom: 0.25rem;
    color: #f4f3f3;
    border-radius: 8px;
    padding-left: 0.25rem;
  `;

  const CommunitySpan = styled.div`
    color: #f4f3f3;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    text-align: center;
    font-size: 24px;
    font-weight: 900;
    margin-top: 3rem;
    border-bottom: solid #7f8994 3px;
    margin-left: 7rem;
    margin-right: 7rem;
    margin-bottom: 1rem;
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
    <>
      <CommunitySpan>
        <span>Community Favorites</span>
      </CommunitySpan>
      <FavoriteContainer>
        {favorites.map((joke) => (
          <CommunityDiv>
            {joke.favorite ? joke.favorite.joke : "waiting"}
          </CommunityDiv>
        ))}
      </FavoriteContainer>
    </>
  );
}
