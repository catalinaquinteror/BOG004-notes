//Aqui voy a hacer la vista de todas las notas,
//tengo que traer el componente Notes y modificarlo de forma individual
//debe estar ruteado en App

import { Logout } from "./Logout";
import { Note } from "components/Note";
import { Button } from "components/Button";
import { CreateNewNoteButton } from "components/NewNoteButton";

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginWithGoogle, LogOut } from "services/firebase";
// import '..styles/Timeline.css'



export const Timeline = (props) => {
     const notes = [
        { text: "hola" },
        { text: "hola2" },
        { text: "hola3" },
      ];
    const navigate = useNavigate();


  const handleLogout = async () => {
    await LogOut();
    navigate("/");
  };

  return (
    <div>
      <ul>{props.children}</ul>
      {notes.map((note) => (
        <Note key={note.text} text={note.text} />
      ))}
      <button onClick={handleLogout}>Logout</button>
      <CreateNewNoteButton />
    </div>
  );
};
