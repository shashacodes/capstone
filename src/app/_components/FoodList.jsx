import { BsFilterLeft } from "react-icons/bs";
import FoodItem from "./FoodItem";
import { MdArrowBackIosNew } from "react-icons/md";
import { foods } from "../object";

const FoodList = ({ foodList }) => {
  return (
    <div>
      <div className="grid grid-cols-3 p-1 md:gap-8 gap-6">
        {foods.map((food) => (
          <FoodItem key={foods.id} food={food} />
        ))}
      </div>
    </div>
  );
};

export default FoodList;
