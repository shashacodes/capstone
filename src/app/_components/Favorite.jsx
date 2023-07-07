import React, { useState, useEffect } from "react";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";

export default function Fav({ id }) {
  const [isFavorite, setIsFavorite] = useState(false);

  const addToFavorites = (favoriteId) => {
    const storedFavorites = localStorage.getItem("favorites");
    let favorites = [];
    if (storedFavorites) {
      favorites = JSON.parse(storedFavorites);
    }
    favorites.push(favoriteId);
    localStorage.setItem("favorites", JSON.stringify(favorites));
  };

  const getFavorites = () => {
    const storedFavorites = localStorage.getItem("favorites");
    if (storedFavorites) {
      const parsedFavorites = JSON.parse(storedFavorites);
      return parsedFavorites;
    }
    const removeItem = (item) => {
      const updatedFavorites = isFavorite.filter(
        (favItem) => favItem.id !== item.id
      );
      setIsFavorite(updatedFavorites);
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    };
    return [];
  };

  const handleClick = () => {
    setIsFavorite(!isFavorite);
  };

  useEffect(() => {
    const favorites = getFavorites();
    setIsFavorite(favorites.includes(id));
  }, [id]);

  useEffect(() => {
    const favorites = getFavorites();
    if (isFavorite) {
      addToFavorites(id);
    } else {
      const updatedFavorites = favorites.filter((favorite) => favorite !== id);
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    }
  }, [id, isFavorite]);

  return (
    <div>
      {isFavorite ? (
        <MdFavorite onClick={handleClick} size={20} color="red" />
      ) : (
        <MdFavoriteBorder onClick={handleClick} size={20} />
      )}
    </div>
  );
}
