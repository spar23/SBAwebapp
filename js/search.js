const URL = "https://pokeapi.co/api/v2";

// DOM ELEMENTS
const searchButton = document.getElementById("poke-search-button");
const pokeGridContainer = document.getElementById("poke-grid-container");
const inputField = document.getElementById("pokesearch-input");
const selectField = document.getElementById("pokefilter");
const loading = document.getElementById("loading-icon-container");

// CHECK FOR FILTER AND SEARCH FOR POKEMON
searchButton.onclick = async () => {
  loading.style.opacity = "1";
  pokeGridContainer.innerHTML = "";
  let option = selectField.value;
  let pokemon = [];
  if (option === "name") {pokemon[0] = await getPokemonByName(`${inputField.value}`)}
  else if (option === "type") {pokemon = await getAllPokemonByType(`${inputField.value}`)};

  for(let i = 0; i < pokemon.length; i++) {
    createPokemonCard(pokemon[i]);
  }

  loading.style.opacity = '0';
}

// GENERATE POKEMON LIST ITEM
function createPokemonCard(pokemon) {
  const pokeListItem = document.createElement("div");
  pokeListItem.classList.add("poke-list-item");

  // Fix for capitalizing first letter
  const pokeName = (pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1));
  const pokeImg = pokemon.sprites.front_default;
  const pokeTypes = pokemon.types.map(el => el.type.name);

  // Build out the html for the item
  const pokeInnerHTML = `
    <div class="info-container">
        <h2>${pokeName}</h2>
        <p>type: ${pokeTypes}</p>
    </div>
  <div class="img-container"><img src="${pokeImg}"></div>
  `;

  // Append card to the grid container
  pokeListItem.innerHTML = pokeInnerHTML;
  pokeGridContainer.appendChild(pokeListItem)
}

// API CALLS ----------------

// Fetch a Pokemon by name
const getPokemonByName = async name => {
  const res = await fetch(`${URL}/pokemon/${name}`);
  const pokemon = await res.json();
  return pokemon;
}

const getAllPokemonByType = async type => {
  const res = await fetch(`${URL}/type/${type}`);
  const pokemonType = await res.json();
  const pokemon = [];
  console.log(pokemonType.pokemon[0].pokemon.name);

  for(let i = 0; i < pokemonType.pokemon.length; i++) {
    const tempPoke = await getPokemonByName(pokemonType.pokemon[i].pokemon.name);
    pokemon.push(tempPoke);
  }
  return pokemon;
}


