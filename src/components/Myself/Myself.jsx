import Special from "../Special/Special";

const Myself = ({ asset }) => {
  return (
    <div>
      <h2 className="text-xs">Myself</h2>
      <Special asset={asset}></Special>
    </div>
  );
};

export default Myself;
