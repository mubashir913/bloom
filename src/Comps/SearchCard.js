// React Imports
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Components
import { SmartButton } from "./smart-elems";
import Dropdown from "./Dropdown";

// Redux things
import { useSelector } from "react-redux";

function SearchCard() {

    const navigate = useNavigate();

    const occasions = useSelector(state => state.reducer.occasions);
    const colors = useSelector(state => state.reducer.colors);
    const currentDropdownValues = useSelector(state => state.reducer.currentDropdownValues)

    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    const searchHandler = () => { 
        if (currentDropdownValues.occasion !== null && currentDropdownValues.color !== null) navigate("flowers");
    }

    useEffect(() => {
        window.addEventListener("resize", () => {
            setScreenWidth(window.innerWidth);
        });
        return () => {
            window.removeEventListener("resize", () => {
                setScreenWidth(window.innerWidth);
            });
        }
    }, []);

    return (
        <div className="search-card">
            <div className="search-card-1"> Find the perfect flowers </div>
            {
            screenWidth > 600 ?
            <div className="search-card-2">
                <Dropdown
                    screenID="hero-dropdown-1"
                    name="occasion"
                    list={occasions}
                    style={{flex: 0.5}}
                    className="search-card-options"
                />
                <Dropdown
                    screenID="hero-dropdown-2"
                    name="color"
                    list={colors}
                    style={{flex: 0.25}}
                    className="search-card-options"
                />
                <SmartButton onClick={searchHandler} style={{flex: 0.25, marginRight: 0}} className="primary-btn search-box-btn"> Search </SmartButton>
            </div>
            :
            <div className="search-card-2-cont-600">
                <div className="search-card-2-600">
                <Dropdown
                    screenID="hero-dropdown-1"
                    name="occasion"
                    list={occasions}
                    style={{flex: 0.5}}
                    className="search-card-options"
                />
                <div style={{width: "10px"}} />
                <Dropdown
                    screenID="hero-dropdown-2"
                    name="color"
                    list={colors}
                    style={{flex: 0.5}}
                    className="search-card-options"
                />
                </div>
                <SmartButton onClick={searchHandler} className="primary-btn search-box-btn-600"> Search </SmartButton>
            </div>
            }
            
        </div>
    )
}

export default SearchCard;