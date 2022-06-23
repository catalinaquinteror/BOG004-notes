//Aqui voy a hacer el componente de las notas, y luego lo exporto e importo en la vista timeline.
import React from "react";
//import '../styles/Notes.css';

export const NotesPrueba = [
  { text: "hola" },
  { text: "hola2" },
  { text: "hola3" },
];

export const Note = ({ text }) => {
  return (
    <li>
      <span>{text}</span>
    </li>
  );
};
