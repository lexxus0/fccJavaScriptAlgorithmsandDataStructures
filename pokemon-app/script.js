document
  .getElementById("search-form")
  .addEventListener("submit", async function (event) {
    event.preventDefault();

    const pokemonInput = document
      .getElementById("search-input")
      .value.trim()
      .toLowerCase()
      .replace(/[^a-z0-9]/g, "");
    const url = `https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${pokemonInput}`;

    try {
      const response = await axios.get(url);
      const data = response.data;

      displayPokemon(data);
    } catch (error) {
      alert("Pokémon not found");
      clearPokemonInfo();
    }
  });

function displayPokemon(pokemon) {
  document.getElementById("pokemon-name").textContent =
    pokemon.name.toUpperCase();
  document.getElementById("pokemon-id").textContent = `#${pokemon.id}`;
  document.getElementById("sprite-container").innerHTML = `
        <img id="sprite" src="${pokemon.sprites.front_default}" alt="${pokemon.name}" />
    `;
  document.getElementById("weight").textContent = `Weight: ${pokemon.weight}`;
  document.getElementById("height").textContent = `Height: ${pokemon.height}`;

  const types = pokemon.types.map((type) => type.type.name.toUpperCase());
  document.getElementById("types").innerHTML = "Type: ";
  types.forEach((type, index) => {
    if (index > 0) {
      document.getElementById("types").innerHTML += ", ";
    }
    document.getElementById("types").innerHTML += `<span>${type}</span>`;
  });

  document.getElementById("hp").textContent = pokemon.stats[0].base_stat;
  document.getElementById("attack").textContent = pokemon.stats[1].base_stat;
  document.getElementById("defense").textContent = pokemon.stats[2].base_stat;
  document.getElementById("special-attack").textContent =
    pokemon.stats[3].base_stat;
  document.getElementById("special-defense").textContent =
    pokemon.stats[4].base_stat;
  document.getElementById("speed").textContent = pokemon.stats[5].base_stat;
}

function clearPokemonInfo() {
  document.getElementById("pokemon-name").textContent = "";
  document.getElementById("pokemon-id").textContent = "";
  document.getElementById("sprite-container").innerHTML = "";
  document.getElementById("weight").textContent = "";
  document.getElementById("height").textContent = "";
  document.getElementById("types").innerHTML = "";
  document.getElementById("hp").textContent = "";
  document.getElementById("attack").textContent = "";
  document.getElementById("defense").textContent = "";
  document.getElementById("special-attack").textContent = "";
  document.getElementById("special-defense").textContent = "";
  document.getElementById("speed").textContent = "";
}
