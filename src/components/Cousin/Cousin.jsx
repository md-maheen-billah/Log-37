import Friend from "../Friend/Friend";
import Special from "../Special/Special";

const Cousin = ({ name, asset }) => {
  return (
    <div>
      <h2 className="text-xs">{name}</h2>
      {asset && <Special asset={asset}></Special>}
      {name === "Banu" && <Friend></Friend>}
    </div>
  );
};

export default Cousin;
