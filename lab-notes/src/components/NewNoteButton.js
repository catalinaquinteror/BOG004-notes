import React from "react";
import "../styles/NewNoteButton.css";

export const CreateNewNoteButton = (props) => {
    const onClickButton = (msg) => {
        alert(msg);
};



    return (
        <button onClick={() => onClickButton("Aquí se debería abrir el modal para la nueva nota")}>
                +
        </button>
    );
};
