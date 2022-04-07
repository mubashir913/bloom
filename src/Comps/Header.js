// React Imports
import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

// Icons
import Logo from "../static/images/logo.svg";
import CartIcon from "../static/icons/cart.svg";
import CartActiveIcon from "../static/icons/cart-active.svg";
import CartIconSmall from "../static/icons/cart-small.svg";
import CartIconSmallActive from "../static/icons/cart-small-active.svg";
import HomeIcon from "../static/icons/home.svg";
import HomeIconActive from "../static/icons/home-active.svg";
import LeafIcon from "../static/icons/leaf.svg";
import LeafIconActive from "../static/icons/leaf-active.svg";

// CSS
import "../static/styles/header.scss";

function Header() {

    const location = useLocation();

    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    const smallNav = [
        {
            icon: LeafIcon,
            activeIcon: LeafIconActive,
            pathname: "/flowers"
        },
        {
            icon: HomeIcon,
            activeIcon: HomeIconActive,
            pathname: "/"
        },
        {
            icon: CartIconSmall,
            activeIcon: CartIconSmallActive,
            pathname: "/cart"
        }
    ];

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

    if (screenWidth > 650) {
        return (
            <header className="header-avg-big">
                <img className="logo" src={Logo} alt="BLOOM" />
                <nav className="nav-avg-big">
                    <NavLink className={(link) => link.isActive ? "nav-link nav-link-active" : "nav-link"} to={{...location, pathname: "/"}}> Home </NavLink>
                    <NavLink className={(link) => link.isActive ? "nav-link nav-link-active" : "nav-link"} to={{...location, pathname: "/flowers"}}> Flowers </NavLink>
                    <NavLink className={(link) => link.isActive ? "cart-link cart-link-active" : "cart-link"} to={{...location, pathname: "/cart"}}>
                        <div className="cart-items"> 0 </div>
                        {
                            location.pathname === "/cart" ?
                            <img className="imgs-svgs" src={CartActiveIcon} alt="" />
                            :
                            <img className="imgs-svgs" src={CartIcon} alt="" />
                        }
                    </NavLink>
                </nav>
            </header>
        )
    } else {
        return (
            <>
            <header className="header-small">
                <img className="logo" src={Logo} alt="BLOOM" />
            </header>
            <nav className="nav-small">
            {
                smallNav.map((elem, index) => {
                    return (
                        <NavLink key={index} to={{...location, pathname: elem.pathname}} className={"no-select nav-small-icon"}>
                            <img className="imgs-svgs icon" src={location.pathname === elem.pathname ? elem.activeIcon : elem.icon} alt="" />
                            {
                            elem.pathname === "/cart" &&
                            <div className="cart-items-div"> 0 </div>
                            }
                        </NavLink>
                    )
                })
            }
            </nav>
            </>
        )
    }
}

export default Header;