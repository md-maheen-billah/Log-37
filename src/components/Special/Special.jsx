import { useContext } from "react";
import { AssetContext } from "../Grandpa/Grandpa";

const Special = ({ asset }) => {
  const gift = useContext(AssetContext);
  return (
    <div>
      <h2 className="text-xs">Special</h2>
      <p className="text-xs">has: {asset}</p>
      <p className="text-xs">Also has: {gift}</p>
    </div>
  );
};

export default Special;
