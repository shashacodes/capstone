import { BsFilterLeft } from "react-icons/bs";
import FoodItem from "./FoodItem";
import { MdArrowBackIosNew } from "react-icons/md";
import Link from "next/link";

const FoodList = ({ foodList }) => {
  return (
    <div>
      <Link href="/">
        <span className="pt-5">
          <MdArrowBackIosNew size={20} />
        </span>
      </Link>
      <div className="grid grid-cols-3 p-5 gap-8">
        {foodList.map((food) => (
          <FoodItem key={food.id} food={food} />
        ))}
      </div>
    </div>
  );
};

export default FoodList;
