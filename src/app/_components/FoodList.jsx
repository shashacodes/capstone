import { BsFilterLeft } from "react-icons/bs";
import FoodItem from "./FoodItem";
import { MdArrowBackIosNew } from "react-icons/md";
import { foods } from "../object";

const FoodList = ({ foodList }) => {
  return (
    <div>
      <div className="grid grid-cols-3 p-5 gap-8">
        {foods.map((food) => (
          <FoodItem key={foods.id} food={food} />
        ))}
      </div>
    </div>
  );
};

export default FoodList;
