// React Imports
import { useRef, useEffect, useState } from "react";

// Icons
import Arrow from "../static/icons/arrow.svg"

// CSS
import "../static/styles/slider.scss";

function Slider(props) {

    const { list, sliderClassName, LeftArrowComp, RightArrowComp, CardComp, sliderSettings } = props;

    const itemsDiv = useRef();
    const [cardWidth, setCardWidth] = useState(0);
    const [startProdIndex, setStartProdIndex] = useState(0);

    const resizeHandler = () => {
        setCardWidth(itemsDiv.current.clientWidth);
    }

    const scrollRightHandler = (e) => {
        if (startProdIndex > 0) {
            itemsDiv.current.children[startProdIndex - 1].scrollIntoView({
                behavior: "smooth",
                block: "nearest",
                inline: "start"
            });
            setStartProdIndex(old => old - 1);
        }
    }

    const scrollLeftHandler = (e) => {
        if (startProdIndex < list.length - sliderSettings.itemsPerScreen) {
            itemsDiv.current.children[startProdIndex + 1].scrollIntoView({
                behavior: "smooth",
                block: "nearest",
                inline: "start"
            });
            setStartProdIndex(old => old + 1);
        }
    }

    const cardProps = {
        style: {
            position: "absolute",
            left: parseFloat(sliderSettings.cardGap.match(/\d+/)[0]/2) + sliderSettings.cardGap.replace(/[^A-Za-z]/g, ''), // Simply sliderSettings.cardGap/2
            right: parseFloat(sliderSettings.cardGap.match(/\d+/)[0]/2) + sliderSettings.cardGap.replace(/[^A-Za-z]/g, ''),
            top: window.innerWidth > 1000 ? "5vw" : "50px",
            bottom: window.innerWidth > 1000 ? "5vw" : "50px"
        }
    }

    useEffect(() => {
        setCardWidth(itemsDiv.current.clientWidth);
        window.addEventListener("resize", resizeHandler);
        return () => {
            window.removeEventListener("resize", resizeHandler);
        }
    }, []);

    return (
        <section className={"slider ".concat(sliderClassName ? sliderClassName : "")}>
            {LeftArrowComp ?
            <LeftArrowComp />
            :
            <span onClick={scrollRightHandler} className="no-select arrow-box"> <img style={{transform: "rotate(-90deg)"}} className="imgs-svgs" src={Arrow} alt="Previous" /> </span>
            }
            <div ref={itemsDiv} style={{gridTemplateColumns: `repeat(${list.length}, 1fr)`}} className="no-select slider-items">
                {list.map((elem, index) => {
                    return (
                        <div key={index} style={{width: `${cardWidth/sliderSettings.itemsPerScreen}px`}} className="card-container">
                            <CardComp item={elem} cardProps={cardProps} />
                        </div>
                    )
                })}
            </div>
            {RightArrowComp ?
            <RightArrowComp />
            :
            <span onClick={scrollLeftHandler} className="no-select arrow-box"> <img style={{transform: "rotate(90deg)"}} className="imgs-svgs" src={Arrow} alt="Next" /> </span>
            }
        </section>
    )
}

export default Slider;