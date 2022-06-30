import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import getHeroesByPublisher from "../actions/getHeroByPublisher";

const HeroesList = ({ publisher }) => {
  const [heroesList, setHeroesList] = useState([{}]);
  const navigate = useNavigate();
  const handleNavigate = (id) => {
    navigate(`/hero/${id}`);
  };
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
            <Grid item xs={3} mt={2} key={hero.id} className="hero-card">
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
                  <div>
                    <Button
                      size="small"
                      onClick={() => handleNavigate(hero.id)}
                    >
                      Learn More
                    </Button>
                  </div>
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
