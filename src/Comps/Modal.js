// CSS
import "../static/styles/modal.scss";

// React Imports
import { useState, useRef, useEffect } from "react";

// CSS
import "../static/styles/modal.scss";

// Redux things
import { useSelector } from "react-redux";

// Modals
import DropdownModal from "./DropdownModal";

const modals = {
    null: null,
    DropdownModal: DropdownModal
}

function Modal() {

    const modal = useRef();
    const [left, setLeft] = useState(0);
    const [top, setTop] = useState(0);

    const ModalComp = modals[useSelector(state => state.reducer.modal.type)];

    const resizeHandler = () => {
        setLeft((window.innerWidth/2) - (modal.current.clientWidth/2));
        setTop((window.innerHeight/2) - (modal.current.clientHeight/2));
    }

    useEffect(() => {
        setLeft((window.innerWidth/2) - (modal.current.clientWidth/2));
        setTop((window.innerHeight/2) - (modal.current.clientHeight/2));
        document.getElementsByTagName("body")[0].classList.add("overflow-hidden");
        window.addEventListener("resize", resizeHandler);
        return () => {
            document.getElementsByTagName("body")[0].classList.remove("overflow-hidden");
            window.removeEventListener("resize", resizeHandler);
        }
    }, []);

    return (
        <section ref={modal} style={{left: `${left}px`, top: `${top}px`}} className="modal">
            {ModalComp !== null && <ModalComp />}
        </section>
    )
}

export default Modal;