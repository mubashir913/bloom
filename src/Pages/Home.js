// React Imports
import { useEffect, useState } from "react";

// Components
import SearchCard from "../Comps/SearchCard";
import Slider from "../Comps/Slider";
import ProdCard from "../Comps/ProdCard";

// CSS
import "../static/styles/home.scss";

// Images
import HeroImg from "../static/images/hero-img.png";

// Data
import { prods } from "../Data/data";

function Home() {

    const [sliderSettings, setSliderSettings] = useState({
        itemsPerScreen: window.innerWidth > 1000 ? 3 : window.innerWidth > 650 ? 2 : 1,
        cardGap: window.innerWidth > 1200 ? "1vw" : "20px"
    });

    const resizeHandler = (e) => {
        if (window.innerWidth > 1000) setSliderSettings(old => {return {...old, itemsPerScreen: 3}});
        else if (window.innerWidth > 650) setSliderSettings(old => {return {...old, itemsPerScreen: 2}});
        else setSliderSettings(old => {return {...old, itemsPerScreen: 1}});

        if (window.innerWidth > 1200) setSliderSettings(old => {return {...old, cardGap: "1vw"}});
        else setSliderSettings(old => {return {...old, cardGap: "20px"}});
    }

    useEffect(() => {
        document.title = "Bloom";
        window.addEventListener("resize", resizeHandler);
        return () => {
            window.removeEventListener("resize", resizeHandler);
        }
    }, [])

    return (
        <section className="home">
            <section className="hero-box">
                <div className="hero-img-div">
                    <img className="no-select hero-img" src={HeroImg} alt="" />
                </div>
                <div className="hero-box-sub">
                    <h1 className="main-heading"> Fresh Flowers </h1>
                    <div className="main-heading-cont"> for every occasion </div>
                    <SearchCard />
                </div>
            </section>
            <section className="latest-prods-box">
                <div className="heading"> latest products </div>
                <Slider
                list={prods}
                sliderClassName="latest-prods-slider"
                CardComp={ProdCard}
                sliderSettings={sliderSettings}
                />
            </section>
        </section>
    )
}

export default Home;