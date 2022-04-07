// Redux Things
import { useDispatch } from "react-redux";
import { setShowModal } from "../ReduxStore/actions";

function Overlay() {

    const dispatch = useDispatch();

    return (
        <div className="no-select overlay" onClick={() => dispatch(setShowModal(false))} />
    )
}

export default Overlay;