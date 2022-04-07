// CSS
import { useNavigate } from "react-router-dom";
import "../static/styles/prod-card.scss";

// Components
import { SmartDiv } from "./smart-elems";

function ProdCard(props) {

    const { item, cardProps } = props;
    const navigate = useNavigate();

    const discountedPrice = (price, discount) => {
        if (discount === null) return price;
        return Math.round(price - ((discount/100)*price));
    }

    return (
        <div className="prod-card" {...cardProps}>
            <div className="img-and-price">
                <div className="img">
                    <img src={item.img} alt="Flower Img" />
                </div>
                <div className="price"></div>
            </div>
            <div className="name"></div>
            <SmartDiv className="prod-card-smart" onClick={() => navigate("flowers")}>
                <div className="img-and-price">
                    <div className="img">
                        <img src={item.img} alt="Flower Img" />
                    </div>
                    <div className="price">
                    {item.discount && <div className="cut-price"> ${item.price} </div>}
                    ${discountedPrice(item.price, item.discount)}
                    </div>
                </div>
                <div className="name">
                    {item.name}
                </div>
            </SmartDiv>
        </div>
    )
}

export default ProdCard;