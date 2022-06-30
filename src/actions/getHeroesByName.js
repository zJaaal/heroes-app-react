import { heroes } from "../data/heroes";

import React from "react";

const getHeroesByName = (name = "Iron Man") => {
  return heroes.filter((hero) =>
    hero.superhero.toLowerCase().includes(name.toLowerCase())
  );
};

export default getHeroesByName;
