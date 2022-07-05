//Aqui voy a hacer el componente de las notas, y luego lo exporto e importo en la vista timeline.
import React from "react";
import '../styles/Note.css';

// export const NotesPrueba = [
//   { text: "hola" },
//   { text: "hola2" },
//   { text: "hola3" },
// ];

export const Note = ({ text , open , onClose, onSave}) => {
  return (
    <form>
      <label></label>
      <textarea className="txtArea"
        placeholder="Write here"
      />
    </form>
    // <li>
    //   <span>{text}</span>
    // </li>
  );
};
