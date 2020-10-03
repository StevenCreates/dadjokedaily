import React from "react";
import styled from "styled-components";
import firebase from "firebase";

export default function DadJokes() {
  const [title, setTitle] = React.useState("");
  const [body, setBody] = React.useState("");
  const db = firebase.firestore();

  const addNote = () => {
    db.collection("notes").add({
      title,
      body,
    });
    setTitle("");
    setBody("");
  };

  return (
    <div>
      <input value={title} onChange={(e) => setTitle(e.target.value)} />

      <input value={body} onChange={(e) => setBody(e.target.value)} />

      <button onClick={addNote}>Add Note</button>
    </div>
  );
}
