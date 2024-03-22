import { useContext } from "react";
import Cousin from "../Cousin/Cousin";
import { MoneyContext } from "../Grandpa/Grandpa";

const Aunt = () => {
  const [money, setMoney] = useContext(MoneyContext);
  return (
    <div>
      <h2 className="text-xs">Aunt</h2>
      <section className="flex">
        <Cousin name={"Mamshad"}></Cousin>
        <Cousin name={"Banu"}></Cousin>
      </section>
      <p>Money: {money}</p>
      <button className="btn" onClick={() => setMoney(money + 1000)}>
        Add Money
      </button>
    </div>
  );
};

export default Aunt;
