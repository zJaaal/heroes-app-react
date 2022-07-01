import { heroes } from "../data/heroes";

import React from "react";

const getHeroesByName = (name) => {
  const query = name.trim();

  if (!query.length) return [];

  return heroes.filter((hero) =>
    hero.superhero.toLowerCase().includes(name.toLowerCase())
  );
};

export default getHeroesByName;
