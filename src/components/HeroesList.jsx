import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import getHeroesByPublisher from "../actions/getHeroByPublisher";

const HeroesList = ({ publisher }) => {
  const [heroesList, setHeroesList] = useState([{}]);

  useEffect(() => {
    setHeroesList(getHeroesByPublisher(publisher));
  }, []);

  return (
    <Grid
      container
      columnSpacing={2}
      columnGap={0.4}
      alignContent="center"
      justifyContent="center"
    >
      {heroesList.length ? (
        heroesList.map((hero) => {
          return (
            <Grid item xs={3} mt={2} key={hero.id}>
              <Card>
                <CardMedia
                  component="img"
                  height="400"
                  src={`../../assets/${hero.id}.jpg`}
                  alt={`${hero.superhero}`}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {hero.superhero}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {`Literally ${hero.superhero} bro`}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
            </Grid>
          );
        })
      ) : (
        <Typography variant="body">Loading...</Typography>
      )}
    </Grid>
  );
};

export default HeroesList;
