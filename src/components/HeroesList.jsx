import { Grid, Typography } from "@mui/material";
import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import HeroCard from "./HeroCard";
import getHeroesByPublisher from "../actions/getHeroByPublisher";

const HeroesList = ({ publisher }) => {
  //Same note as HeroPage.jsx
  const heroesList = useMemo(
    () => getHeroesByPublisher(publisher),
    [publisher]
  );
  return (
    <Grid
      container
      columnSpacing={2}
      columnGap={0.4}
      alignContent="center"
      justifyContent="center"
    >
      {heroesList.length ? (
        heroesList.map((hero) => <HeroCard hero={hero} key={hero.id} />)
      ) : (
        <Typography variant="body">Loading...</Typography>
      )}
    </Grid>
  );
};

export default HeroesList;
