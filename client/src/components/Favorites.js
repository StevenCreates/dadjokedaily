import React from "react";
import styled from "styled-components";
import firebase from "firebase";

export default function Favorites() {
  const [state, setstate] = React.useState("");
  const db = firebase.firestore();

  React.useEffect(() => {
    db.collection("notes")
      .get()
      .then((querySnapshot) => {
        const data = querySnapshot.docs.map((doc) => doc.data());
        console.log(data); // array of cities objects
      });
  }, [db]);
  return <div></div>;
}
