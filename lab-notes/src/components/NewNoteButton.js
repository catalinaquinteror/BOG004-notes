import React, { useState } from "react";
import "../styles/NewNoteButton.css";
import { Modal } from  "components/Modal";

export const CreateNewNoteButton = () => {
    const [openModal, setOpenModal] = useState(false)

    return (
        <div><button className="modalBtn" onClick={() => setOpenModal(true)}>+</button><Modal open={openModal} onClose={()=> setOpenModal(false)} /></div>
    );
};
