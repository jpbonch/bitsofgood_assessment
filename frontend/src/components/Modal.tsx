import { ReactNode } from "react";

function Modal({children} : {children: ReactNode}) {
    return (
        <div>
            {children}
        </div>
    );
}

export default Modal;