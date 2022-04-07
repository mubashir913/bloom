// CSS
import "../static/styles/smart-link.scss";

export function SmartButton(props) {

    const linkProps = {};

    for (let key in props) {
        if (key !== "className" && key !== "onClick") {
            linkProps[key] = props[key];
        }
    }

    const className = "no-select link ";

    const clickHandler = (e) => {
        e.preventDefault();
        const button = e.currentTarget;
        const ripple = document.createElement("span");
        const diameter = Math.max(button.clientWidth, button.clientHeight);
        const radius = diameter / 2;
        ripple.style.width = ripple.style.height = `${radius}px`;
        ripple.style.marginLeft = ripple.style.marginTop = `-${radius/2}px`;
        ripple.classList.add("ripple");
        const rect = e.nativeEvent.target.getBoundingClientRect();       
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;
        const prevRipple = document.getElementsByClassName("ripple")[0];
        if (prevRipple) {
            prevRipple.remove();
        }
        button.appendChild(ripple);
        setTimeout(() => {
            props.onClick && props.onClick(e);
        }, 300);
    }

    return (
        <button onClick={clickHandler} className={className.concat(props.className ? props.className : "")} {...linkProps}>
            {props.children}
            <div className="protector" />
        </button>
    )
}

export function SmartDiv(props) {

    const linkProps = {};

    for (let key in props) {
        if (key !== "className" && key !== "onClick") {
            linkProps[key] = props[key];
        }
    }

    const className = "no-select link ";

    const clickHandler = (e) => {
        e.preventDefault();
        const button = e.currentTarget;
        const ripple = document.createElement("span");
        const diameter = Math.max(button.clientWidth, button.clientHeight);
        const radius = diameter / 2;
        ripple.style.width = ripple.style.height = `${radius}px`;
        ripple.style.marginLeft = ripple.style.marginTop = `-${radius/2}px`;
        ripple.classList.add("ripple");
        const rect = e.nativeEvent.target.getBoundingClientRect();       
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;
        const prevRipple = document.getElementsByClassName("ripple")[0];
        if (prevRipple) {
            prevRipple.remove();
        }
        button.appendChild(ripple);
        setTimeout(() => {
            props.onClick && props.onClick(e);
        }, 300);
    }

    return (
        <div onClick={clickHandler} className={className.concat(props.className ? props.className : "")} {...linkProps}>
            <div className="protector" />
            {props.children}
        </div>
    )
}

export function HighlightDiv(props) {

    const linkProps = {};

    for (let key in props) {
        if (key !== "className" && key !== "onClick") {
            linkProps[key] = props[key];
        }
    }

    const clickHandler = (e) => {
        e.preventDefault();
        const button = e.currentTarget;
        const highlight = document.createElement("span");
        highlight.classList.add("highlight");
        const prevHighlight = document.getElementsByClassName("highlight")[0];
        if (prevHighlight) {
            prevHighlight.remove();
        }
        button.appendChild(highlight);
        setTimeout(() => {
            props.onClick && props.onClick(e);
        }, 100);
    }

    const className = "no-select link ";

    return (
        <div onClick={clickHandler} className={className.concat(props.className ? props.className : "")} {...linkProps}>
            <div className="protector" />
            {props.children}
        </div>
    )
}