import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";

import { useNavigate } from "react-router-dom";

const HeroCard = ({ hero }) => {
  const navigate = useNavigate();
  const handleNavigate = (id) => {
    navigate(`/hero/${id}`);
  };
  return (
    <Grid item xs={3} mt={2} className="hero-card">
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
            <Button size="small" onClick={() => handleNavigate(hero.id)}>
              Learn More
            </Button>
          </div>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default HeroCard;
