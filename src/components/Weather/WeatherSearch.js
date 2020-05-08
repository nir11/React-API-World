import React, { useEffect, useState } from "react";
import {
  CircularProgress,
  FormControl,
  Grid,
  Input,
  InputAdornment,
  Tooltip,
  Typography
} from "@material-ui/core";
import Search from "@material-ui/icons/Search";
import { makeStyles } from "@material-ui/core/styles";

import useDebounce from "./use-debounce";

const useStyles = makeStyles(theme => ({
  error: {
    color: "red",
    padding: "10px"
  },
  search: {
    paddingTop: "5px"
  }
}));

export default function WeatherSearch(props) {
  const classes = useStyles();
  const { setCity } = props;
  const [searchTerm, setSearchTerm] = useState(props.city);
  const [isSearching, setSearching] = useState(true);
  const debouncedSearchTerm = useDebounce(searchTerm, 1000);
  const hasError = props.error ? true : false;
 // setSearching(true);
  //setSearchTerm(props.city);

  useEffect(() => {
    if (debouncedSearchTerm) {
      setCity(debouncedSearchTerm);
      setSearching(false);
    }
  }, [setCity, debouncedSearchTerm, isSearching]);



  return (
    <div className={classes.search}>
      <span
        onChange={e => {
          setSearching(true);
          setSearchTerm(props.city);
        }}
        onProgress ={e => {
          setSearching(true);
          setSearchTerm(props.city);
        }}   
        >
          {props.city}
      </span>
      <Grid container alignItems="flex-end">
        <Grid item xs={12} style={{ textAlign: "center" }}>
          <FormControl>
            <Input
              defaultValue={props.city}
              id="search-city"
              error={hasError}
              placeholder="Enter city name"
              onChange={e => {
                setSearching(true);
                setSearchTerm(e.target.value);
              }}
              startAdornment={
                <InputAdornment position="start">
                  <Tooltip title="Optional: Enter a two-letter country code after the city name to make the search more precise. For example, London, GB.">
                    <Search />
                  </Tooltip>
                </InputAdornment>
              }
              endAdornment={
                isSearching && (
                  <InputAdornment position="end">
                    <CircularProgress size={20} />
                  </InputAdornment>
                )
              }
            />
            {props.error && (
              <Typography className={classes.error}>{props.error}</Typography>
            )}
          </FormControl>
        </Grid>
      </Grid>
    </div>
  );
}
