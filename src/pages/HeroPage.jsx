import { Typography, Grid } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import { useParams } from "react-router-dom";
import getHeroById from "../actions/getHeroById";

const HeroPage = () => {
  const { heroId } = useParams();

  const hero = getHeroById(heroId);
  return (
    <Grid container pt={2} pb={2}>
      {!hero ? (
        <Typography variant="h5" align="center">
          Couldn't find any hero with that id
        </Typography>
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
          </Grid>
        </>
      )}
    </Grid>
  );
};

export default HeroPage;
