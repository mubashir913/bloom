// React Imports
import { useEffect } from "react";

function Cart() {

    useEffect(() => {
        document.title = "Cart | Bloom";
    }, []);

    return (
        <div className="temp"> Cart </div>
    )
}

export default Cart;