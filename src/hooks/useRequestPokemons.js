import React, { useEffect, useState } from "react";
import axios from "axios";
import { addValueToKeyRequestPokemon} from "../util/ReturnRequestPokemon"

export default function useRequestPokemons() {
  const [pokemons, setPokemons] = React.useState([]);
  const [error, setError] = useState();
  const [onLoad, setOnload] = useState(false);

  useEffect(() => {
    requestPokemon("https://pokeapi.co/api/v2/pokemon?limit=24&offset=0");
  }, []);

  const requestPokemon = async (url) => {
    setOnload(true);
    const res = await axios.get(url);
    getPokemon(res.data.results);
    setOnload(false);
  };

  const getPokemon = (results) => {
    setOnload(true);
    const promisesArray = results.map((item) => {
      return axios.get(item.url);
    });

    Promise.all(promisesArray)
      .then((res) => {
        
        setPokemons( 
          res.map((item) => {
            return addValueToKeyRequestPokemon(item);
          })
        );
      })
      .catch((error) => {
        setError(error);
      });

    setOnload(false);
  };

  return { pokemons, onLoad, error };
}
