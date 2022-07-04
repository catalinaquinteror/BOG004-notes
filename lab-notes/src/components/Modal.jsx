import React from "react";
import "../styles/modal.css"
import { Note } from "./Note";

export const Modal = ({open, onClose}) => {
    if(!open) return null;
    return(
        <div onClick={onClose} className="overlay">
            <div onClick={(e) =>{e.stopPropagation()}} className="modalContainer">
                
                <div className="modalDown">
                    <button onClick={onClose} className="closeBtn">X</button>
                    <div className="content">
                    <Note></Note>
                    </div>
                    <div className="btnContaainer">
                        <button className="btnPrimary">
                            <span className="bold">Create</span>
                        </button>
                        <button onClick={onClose} className="btnOutline">
                            <span className="bold">Cancel</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};