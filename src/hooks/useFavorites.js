import { useState, useEffect } from "react";

export function useFavorites(key) {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = localStorage.getItem(key);
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, [key]);
  const toggleFavorite = (item) => {
    let data = JSON.parse(localStorage.getItem(key));
    if (data) {
      let res = data.some((ele) => ele.id === item.id);
      if (res) {
        let filterData = data.filter((ele) => ele.id !== item.id);
        localStorage.setItem(key, JSON.stringify(filterData));
        setFavorites(filterData);
      } else {
        localStorage.setItem(key, JSON.stringify([...data, item]));
        setFavorites([...data, item]);
      }
    } else {
      localStorage.setItem(key, JSON.stringify([item]));
      setFavorites([item]);
    }
  };

  return [favorites, toggleFavorite];
}
