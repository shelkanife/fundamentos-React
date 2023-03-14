import { PokeInfo } from "../interfaces/pokedex";

// import fetch from 'node-fetch'
export async function fetchPokemon(pokeName: string): Promise<PokeInfo> {
  const url: string = `https://pokeapi.co/api/v2/pokemon/${pokeName.toLowerCase()}`;

  return fetch(url)
    .then(async (response) => {
      if (response.status == 404) {
        return null;
      }
      return await response.json();
    })
    .then((response) => {
      const info = {
        src: "/static.gif",
        height: 0,
        weight: 0,
        type: [],
        stats: [0, 0, 0, 0, 0, 0],
      };
      info.src = response.sprites.front_default;
      info.height = response.height;
      info.weight = response.weight;
      info.type = response.types.map((type: { type: { name: string } }) =>
        type.type.name.toUpperCase()
      );
      info.stats = response.stats.map(
        (stat: { base_stat: any }) => stat.base_stat
      );
      return info;
    })
    .catch((e) => {
      return {
        src: "/static.gif",
        height: 0,
        weight: 0,
        type: [],
        stats: [0, 0, 0, 0, 0, 0],
      };
    });
}
