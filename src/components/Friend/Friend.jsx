import { useContext } from "react";
import { AssetContext } from "../Grandpa/Grandpa";

const Friend = () => {
  const gift = useContext(AssetContext);
  return (
    <div>
      <h2 className="text-xs">Friend</h2>
      <p className="text-sm">has: {gift}</p>
    </div>
  );
};

export default Friend;
