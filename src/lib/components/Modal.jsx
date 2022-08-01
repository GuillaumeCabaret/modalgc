import React from "react";

function Modal(props) {
    
    if(props.isOpen) {
        return (
            <>
                <div className="modal-background">
                    <div className="modal">
                        <button onClick={props.closeModal}>X</button>
                        <p> Employee added</p>
                    </div>
                </div>

            </>
        )
    }
    else {
        return null
    }

}

export default Modal; 