// React Imports
import { useEffect } from "react";

function Error404() {

    useEffect(() => {
        document.title = "Page Not Found | Bloom";
    }, []);

    return (
        <div className="temp">Error 404</div>
    )
}

export default Error404;