// import fetch from 'node-fetch'
export async function fetchPokemon(pokeName) {
  const url = `https://pokeapi.co/api/v2/pokemon/${pokeName.toLowerCase()}`;

  return fetch(url)
    .then(async (response) => {
      if (response.status == 404) {
        return null;
      }
      return await response.json();
    })
    .then((response) => {
      const info = {};
      info.src = response.sprites.front_default;
      info.height = response.height;
      info.weight = response.weight;
      info.type = response.types.map((type) => type.type.name.toUpperCase());
      info.stats = response.stats.map((stat) => stat.base_stat);
      return info;
    })
    .catch((e) => {
      return {
        src: "/static.gif",
        height: null,
        weight: null,
        type: [],
        stats: [0, 0, 0, 0, 0, 0],
      };
    });
}
