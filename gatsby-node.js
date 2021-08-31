const axios = require("axios");

const fetchData = async () => {
  const { data: pokemonResult } = await axios.get(
    "https://pokeapi.co/api/v2/pokemon?limit=151"
  );
  const pokemonList = await Promise.all(
    pokemonResult.results.map(async (pokemonEach) => {
      // Get individual pokemon details
      const {
        data: {
          name,
          id,
          height,
          weight,
          sprites: { front_default },
          species,
        },
      } = await axios.get(pokemonEach.url);

      // Get pokemon flavor text
      const {
        data: { flavor_text_entries },
      } = await axios.get(species.url);
      const flavour_text_entry = flavor_text_entries[0];
      return { name, id, height, weight, front_default, flavour_text_entry };
    })
  );
  return pokemonList;
};

exports.createPages = async ({ actions: { createPage } }) => {
  const pokemonData = await fetchData();
  console.log(pokemonData);
  createPage({
    path: "/",
    component: require.resolve("./src/templates/pokemon.js"),
    context: { data: pokemonData },
  });

  pokemonData.forEach((pokemon) => {
    createPage({
      path: `/${pokemon.name}`,
      component: require.resolve("./src/templates/pokemon-details.js"),
      context: { data: pokemon },
    });
  });
};
