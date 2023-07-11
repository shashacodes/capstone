import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { LuSettings2 } from "react-icons/lu";
import Image from "next/image";
import Button from "./Button";

const SearchBar = ({ data }) => {
  const [searchList, setSearchList] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showMore, setShowMore] = useState(false);
  const maxItemsToShow = 5;

  const handleFormSubmit = (event) => {
    event.preventDefault();
  };

  const handleSearch = (e) => {
    const list = e.target.value.toLowerCase();
    setSearchList(list);

    const filteredData = data.filter(
      (item) =>
        item.name.toLowerCase().includes(list) ||
        item.description.toLowerCase().includes(list)
    );

    setSearchResults(filteredData.slice(0, maxItemsToShow));
  };

  const handleClickShowMore = () => {
    setShowMore(true);
    setSearchResults(
      data.filter(
        (item) =>
          item.name.toLowerCase().includes(searchList) ||
          item.description.toLowerCase().includes(searchList)
      )
    );
  };
  const handleClickShowLess = () => {
    setShowMore(false);
    setSearchResults([]);
  };

  return (
    <div className="cursor-pointer">
      <div className="flex sm:text-sm justify-center items-center">
        <form onSubmit={handleFormSubmit} action="search">
          <div className="relative bg-white">
            <input
              type="search"
              value={searchList}
              onChange={handleSearch}
              placeholder="Search food,drinks...."
              className="border border-[#626260] bg-transparent text-black rounded-md p-2 pl-10"
            />
            <BsSearch
              size={24}
              className="absolute left-3 top-1/2 p-1 transform -translate-y-1/2 "
            />
          </div>
          <button type="submit" className="hidden">
            Submit
          </button>
        </form>
        <span className="border rounded-md bg-[#01AC66]  p-2">
          <LuSettings2 size={25} style={{ color: "white" }} />
        </span>{" "}
      </div>

      <div className="relative ">
        <ul className="ml-3 grid grid-cols-2 gap-2 mt-5">
          {searchResults.length === 0 ? (
            <li></li>
          ) : (
            searchResults.map((item) => (
              <li key={item.id}>
                <div className="border rounded-md border-[#626260] w-[150px] mt-3">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={100}
                    height={100}
                  />
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                  <p>Price:₦ {item.price} /kg</p>
                  <Button />
                </div>
              </li>
            ))
          )}
          {!showMore && searchResults.length < data.length && (
            <li>
              <button
                className=" absolute right-4 text-sm top-0 font-bold p-1"
                onClick={handleClickShowMore}
              >
                Show More
              </button>
            </li>
          )}
          {showMore && (
            <li className="absolute top-6 right-4 text-sm ">
              <button
                className="bg-green-500  text-black p-1 font-bold"
                onClick={handleClickShowLess}
              >
                Show Less
              </button>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default SearchBar;
