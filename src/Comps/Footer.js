// CSS
import "../static/styles/footer.scss";

// Components
import { SmartDiv } from "./smart-elems";

// Icons
import FbIcon from "../static/icons/fb.svg";
import InstaIcon from "../static/icons/insta.svg";
import TwitterIcon from "../static/icons/twitter.svg";

function Footer() {

    const socials = [
        {
            icon: FbIcon,
            alt: "Facebook Page",
            onClick: () => window.open("https://www.facebook.com", '_blank').focus(),
        },
        {
            icon: InstaIcon,
            alt: "Insta Page",
            onClick: () => window.open("https://www.instagram.com", '_blank').focus(),
        },
        {
            icon: TwitterIcon,
            alt: "Twitter Page",
            onClick: () => window.open("https://www.twitter.com", '_blank').focus(),
        }
    ]

    return (
        <footer>
            <div className="socials-div">
            {socials.map((elem, index) => {
                return (
                    <SmartDiv key={index} className="socials" onClick={elem.onClick}>
                        <img className="imgs-svgs" src={elem.icon} alt={elem.alt} />
                    </SmartDiv>
                )
            })}
            </div>
            <div className="copyrights-div"> &copy; 2022 Muhammad Mubashir. All Rights Reserved. </div>
        </footer>
    )
}

export default Footer;