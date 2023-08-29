import { ReactNode } from "react";
import "./styles/Modal.css"

function Modal({children, setShowModal} : {children: ReactNode, setShowModal: Function}) {
    return (
        <div className="shadow" onClick={(e)=> e.stopPropagation()}>
        <div className="modal">
            <button className="modalClose" onClick={()=>setShowModal(false)}>X</button>
            {children}
        </div>
        </div>
    );

}

export default Modal;