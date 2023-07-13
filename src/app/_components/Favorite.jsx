// import React, { useState, useEffect } from "react";
// import { MdFavoriteBorder, MdFavorite } from "react-icons/md";

// export default function Fav({ id }) {
//   const [isFavorite, setIsFavorite] = useState(false);

//   const addToFavorites = (favoriteId) => {
//     const storedFavorites = localStorage.getItem("favorites");
//     let favorites = [];
//     if (storedFavorites) {
//       favorites = JSON.parse(storedFavorites);
//     }
//     favorites.push(favoriteId);
//     localStorage.setItem("favorites", JSON.stringify(favorites));
//   };

//   const getFavorites = () => {
//     const storedFavorites = localStorage.getItem("favorites");
//     if (storedFavorites) {
//       const parsedFavorites = JSON.parse(storedFavorites);
//       return parsedFavorites;
//     }

//     const removeItem = (item) => {
//       const updatedFavorites = isFavorite.filter(
//         (favItem) => favItem.id !== item.id
//       );
//       setIsFavorite(updatedFavorites);
//       localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
//     };
//     return [];
//   };

//   const handleClick = () => {
//     setIsFavorite(!isFavorite);
//   };

//   useEffect(() => {
//     const favorites = getFavorites();
//     setIsFavorite(favorites.includes(id));
//   }, [id]);

//   useEffect(() => {
//     const favorites = getFavorites();
//     if (isFavorite) {
//       addToFavorites(id);
//     } else {
//       const updatedFavorites = favorites.filter((favorite) => favorite !== id);
//       localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
//     }
//   }, [id, isFavorite]);

//   return (
//     <div>
//       {isFavorite ? (
//         <MdFavorite onClick={handleClick} size={20} color="red" />
//       ) : (
//         <MdFavoriteBorder onClick={handleClick} size={20} />
//       )}
//     </div>
//   );
// }
import React, { useState, useEffect } from "react";
import { MdFavoriteBorder, MdFavorite, MdRemoveCircle } from "react-icons/md";

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

  const removeFromFavorites = (favoriteId) => {
    const storedFavorites = localStorage.getItem("favorites");
    if (storedFavorites) {
      const favorites = JSON.parse(storedFavorites);
      const updatedFavorites = favorites.filter(
        (favorite) => favorite !== favoriteId
      );
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    }
  };

  const getFavorites = () => {
    const storedFavorites = localStorage.getItem("favorites");
    if (storedFavorites) {
      const parsedFavorites = JSON.parse(storedFavorites);
      return parsedFavorites;
    }
    return [];
  };

  const handleClick = () => {
    setIsFavorite(!isFavorite);
  };

  const handleRemove = () => {
    setIsFavorite(false);
    removeFromFavorites(id);
  };

  useEffect(() => {
    const favorites = getFavorites();
    setIsFavorite(favorites.includes(id));
  }, [id]);

  useEffect(() => {
    if (isFavorite) {
      addToFavorites(id);
    } else {
      removeFromFavorites(id);
    }
  }, [id, isFavorite]);

  return (
    <div>
      {isFavorite ? (
        <>
          <MdFavorite onClick={handleClick} size={20} color="red" />
          <MdRemoveCircle onClick={handleRemove} size={20} />
        </>
      ) : (
        <MdFavoriteBorder onClick={handleClick} size={20} />
      )}
    </div>
  );
}
