// Components
import { HighlightDiv } from "./smart-elems";

// Redux things
import { useSelector, useDispatch } from "react-redux";
import { updateCurrentDropdownValues, setShowModal } from "../ReduxStore/actions";

function DropdownModal() {

    const dispatch = useDispatch();

    const currentDropdownValues = useSelector(state => state.reducer.currentDropdownValues)
    const modal = useSelector(state => state.reducer.modal);

    const optionSelectHandler = (value) => {
        switch (modal.name) {
            case "occasion":
                dispatch(updateCurrentDropdownValues({
                    ...currentDropdownValues,
                    occasion: value
                }));
                break;
            case "color":
                dispatch(updateCurrentDropdownValues({
                    ...currentDropdownValues,
                    color: value
                }));
                break;
            default:
                break;
        }
        dispatch(setShowModal(false));
    }

    return (
        <div className="modal-dropdown">
            <div className="heading"> {modal.name} </div>
            {modal.list.map((item, index) => {
                return (
                    <HighlightDiv onClick={() => optionSelectHandler(item)} key={index} className="options-div">
                        <div className="options-name"> {item} </div>
                        <div className={currentDropdownValues[modal.name] === item ? "options-indicator-active" : "options-indicator-inactive"} />
                    </HighlightDiv>
                )
            })}
        </div>
    )
}

export default DropdownModal;