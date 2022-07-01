import { Grid, Typography, TextField, Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import queryString from "query-string";
import useForm from "../hooks/useForm";
import HeroCard from "../components/HeroCard";
import getHeroesByName from "../actions/getHeroesByName";

const SearchPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { q = "" } = queryString.parse(location.search);

  const [{ searchText }, handleInputText] = useForm({
    searchText: q,
  });

  const results = getHeroesByName(q);

  const handleSearch = (evt) => {
    evt.preventDefault();
    navigate(`?q=${searchText}`); //If you dont declare a route, it will go to the same route
  };

  return (
    <Grid container pb={4} spacing={2}>
      <Grid item xs={3} component="form" onSubmit={handleSearch}>
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

        <Grid item xs={12} pb={2} pt={2}>
          <Button variant="outlined" startIcon={<SearchIcon />} type="submit">
            Search
          </Button>
        </Grid>
      </Grid>
      <Grid item xs={9}>
        <Grid
          container
          spacing={2}
          alignContent="center"
          justifyContent="center"
        >
          {results.length && q.length ? (
            results.map((hero) => <HeroCard hero={hero} key={hero.id} />)
          ) : (
            <Grid item>
              <Typography
                variant="h3"
                justify="center"
                pt={6}
                className="hero-page"
              >
                {q.length
                  ? "I couldn't find anything :("
                  : "Welcome! Please try to search something"}
              </Typography>
            </Grid>
          )}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SearchPage;
