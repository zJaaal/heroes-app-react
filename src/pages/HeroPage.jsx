import { Typography, Grid, Button } from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";
import getHeroById from "../actions/getHeroById";

const HeroPage = () => {
  const { heroId } = useParams();
  const navigate = useNavigate();
  const hero = getHeroById(heroId);

  const handleReturn = () => {
    navigate(-1);
  };
  return (
    <Grid container pt={2} pb={2} className="hero-page">
      {!hero ? (
        <>
          <Grid item xs={12}>
            <Typography variant="h5" align="center">
              Couldn't find any hero with that id
            </Typography>
          </Grid>
          <Grid
            item
            pt={2}
            xs={12}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Button variant="outlined" onClick={handleReturn}>
              Go Back
            </Button>
          </Grid>
        </>
      ) : (
        <>
          <Grid item xs={5}>
            <img
              src={`../../assets/${heroId}.jpg `}
              alt={`${hero.superhero}`}
              height="500"
              className="hero-image"
            />
          </Grid>
          <Grid item xs={7}>
            <Typography variant="h4">{hero.superhero}</Typography>
            <Typography variant="subtitle2">{hero.alter_ego}</Typography>
            <Typography variant="h6" pt={2}>
              Information:
            </Typography>
            <Typography variant="body">{`${hero.superhero} is a character from a comic series created by 
            ${hero.publisher} his first appareance was in the comic 
            ${hero.first_appearance} starring characters as: 
            ${hero.characters}`}</Typography>
            <Grid pt={2}>
              <Button variant="outlined" onClick={handleReturn}>
                Go Back
              </Button>
            </Grid>
          </Grid>
        </>
      )}
    </Grid>
  );
};

export default HeroPage;
