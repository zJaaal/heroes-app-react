import { heroes } from "../data/heroes";
const getHeroByPublisher = (publisher) => {
  if (!publisher) return heroes.sort(() => Math.random() - 0.5);

  const validPublisher = ["DC Comics", "Marvel Comics"];

  if (!validPublisher.includes(publisher)) {
    throw new Error(`${publisher} is not valid publisher`);
  }

  return heroes.filter((hero) => hero.publisher === publisher);
};

export default getHeroByPublisher;
