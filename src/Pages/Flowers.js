// React Imports
import { useEffect } from "react";

function Flowers() {

  useEffect(() => {
    document.title = "Find Perfect Flowers For Every Occasion | Bloom";
  }, []);

  return (
    <div className="temp">Flowers</div>
  )
}

export default Flowers;