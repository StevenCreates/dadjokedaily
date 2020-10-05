import React from "react";
import styled from "styled-components";
import firebase from "firebase";

export default function Favorites() {
  const [favorites, setFavorites] = React.useState([]);
  const db = firebase.firestore();

  const FavoriteContainer = styled.div`
    margin-left: 7rem;
    margin-right: 7rem;
    height: 40vh;
    max-height: 40vh;
    background: white;
    overflow-y: scroll;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
    border-radius: 7px;
  `;

  const CommunityDiv = styled.div`
    width: full;
    font-weight: 400;
    border-bottom: #cbd5e0 solid 1px;
    padding: 1rem;
  `;

  const CommunitySpan = styled.div`
    color: #dfbb4f;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    text-align: center;
    font-size: 24px;
    font-weight: 600;
    margin-top: 3rem;
    margin-left: 7rem;
    margin-right: 7rem;
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
