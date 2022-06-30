import { Grid, Typography, TextField, Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React, { useState } from "react";
import useForm from "../hooks/useForm";
import HeroCard from "../components/HeroCard";
import getHeroesByName from "../actions/getHeroesByName";

const SearchPage = () => {
  const [{ searchText }, handleInputText, reset] = useForm({
    searchText: "",
  });
  const [results, setResults] = useState(getHeroesByName("Iron Man"));

  const handleSearch = (evt) => {
    evt.preventDefault();
    setResults(getHeroesByName(searchText));
    reset();
  };
  return (
    <Grid container pb={4}>
      <Grid container spacing={2} component="form" onSubmit={handleSearch}>
        <Grid item xs={12}>
          <Typography variant="h4" pt={2}>
            Search Hero
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="standard-basic"
            label="Search"
            placeholder="Iron Man"
            variant="standard"
            name="searchText"
            value={searchText}
            autoComplete="off"
            onChange={handleInputText}
          />
        </Grid>

        <Grid item xs={12} pb={2}>
          <Button variant="outlined" startIcon={<SearchIcon />} type="submit">
            Search
          </Button>
        </Grid>
        <Grid
          container
          spacing={2}
          alignContent="center"
          justifyContent="center"
        >
          {results.length ? (
            results.map((hero) => <HeroCard hero={hero} />)
          ) : (
            <Typography variant="h3" justify="center" pb={4}>
              I couldn't find anything :(
            </Typography>
          )}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SearchPage;
