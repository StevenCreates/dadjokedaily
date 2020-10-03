import React from "react";
import firebase from "firebase";
import DadJokes from "./components/DadJokes";

function App() {
  // const firebaseApp = firebase.apps[0];
  return (
    <div className='App'>
      Firebase
      <DadJokes />
    </div>
  );
}

export default App;
