import React from "react";
import styled from "styled-components";
import firebase from "firebase";

export default function DadJokes() {
  const AddNoteDiv = styled.div`
    display: flex;
    width: 40%;
    flex-direction: column;
    margin: 30px auto;
    padding: 5px;
  `;

  const InputTitle = styled.input`
    padding: 0.5em;
    border: none;
    background: #f4f4;
    margin-bottom: 10px;
    border-radius: 3px;
  `;

  const BodyTextArea = styled.textarea`
    padding: 0.5em;
    border: none;
    height: 80px;
    background: #f4f4;
    margin-bottom: 10px;
    border-radius: 3px;
  `;

  const Button = styled.div`
    background: blue;
    color: white;
    font-size: 1em;
    padding: 10px;
    cursor: pointer;
    border-radius: 3px;
  `;

  const [title, setTitle] = React.useState("");
  const [body, setBody] = React.useState("");

  const addNote = () => {
    firebase.firestore().collection("notes").add({
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

      <Button onClick={addNote}>Add Note</Button>
    </div>
  );
}
