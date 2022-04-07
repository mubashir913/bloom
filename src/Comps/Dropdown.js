// React Imports
import { useState, useRef } from "react";

// Icons
import Arrow from "../static/icons/arrow.svg";

// CSS
import "../static/styles/dropdown.scss";

// Redux Things
import { useSelector, useDispatch } from "react-redux";
import { setShowModal, setModal, updateCurrentDropdownValues } from "../ReduxStore/actions";

function Dropdown(props) {

    const [dropdownIsOpen, setDropdownIsOpen] = useState(false);
    const currentDropdownValues = useSelector(state => state.reducer.currentDropdownValues)
    const dropdown = useRef();
    const screen = useRef();
    const dispatch = useDispatch();

    const divProps = {};

    for (let key in props) {
        if (key === "className" || key === "onClick" || key === "onTouchEnd" || key === "name" || key === "list" || key === "screenID") {
        } else {
            divProps[key] = props[key];
        }
    }

    const showDropdown = () => {
        dropdown.current.style.display = "block";
        setTimeout(() => {
            dropdown.current.style.opacity = 1;
        }, 50);
        setDropdownIsOpen(true);
    }

    const hideDropdown = () => {
        dropdown.current.style.opacity = 0;
        setTimeout(() => {
            dropdown.current.style.display = "none";
        }, 150);
        setDropdownIsOpen(false);
    }

    const clickHandler = (e) => {
        e.preventDefault();
        if (dropdownIsOpen) hideDropdown();
        else showDropdown();
    }

    const touchHandler = (e) => {
        e.preventDefault();
        dispatch(setModal({
            type: "DropdownModal",
            name: props.name,
            list: props.list
        }));
        dispatch(setShowModal(true));
    }

    const optionSelectHandler = (value) => {
        switch (props.name) {
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
        hideDropdown();
    }

    document.onclick = (e) => {
        if (dropdownIsOpen && e.target !== screen.current) hideDropdown();
    }

    return (
        <div className={"no-select dropdown ".concat(props.className ? props.className : "")} {...divProps}>
            <div id={props.screenID} ref={screen} onClick={clickHandler} onTouchEnd={touchHandler} className="screen" />
            <span className="dropdown-name"> {currentDropdownValues[props.name] !== null ? currentDropdownValues[props.name] : props.name} </span>
            <img src={Arrow} alt="" />
            <div ref={dropdown} className="dropdown-options-div" style={{display: "none", opacity: 0}}>
            {
                props.list.map((item, index) => {
                    return <div onClick={() => optionSelectHandler(item)} className="dropdown-options" key={index}> {item} </div>
                })
            }
            </div>
        </div>
    )
}

export default Dropdown;