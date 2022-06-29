import { heroes } from "../data/heroes";
const getHeroByPublisher = (publisher) => {
  return heroes.filter((hero) => hero.publisher === publisher);
};

export default getHeroByPublisher;
