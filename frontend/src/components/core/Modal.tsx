import { ReactNode } from "react";
import "./styles/Modal.css"

function Modal({children, setShowModal} : {children: ReactNode, setShowModal: Function}) {
    return (
        <div className="shadow">
        <div className="modal">
            <button onClick={()=>setShowModal(false)}>X</button>
            {children}
        </div>
        </div>
    );

}

export default Modal;