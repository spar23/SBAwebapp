const URL = "https://pokeapi.co/api/v2/pokemon";

const getPokemonByID = async id => {
  const res = await fetch(`${URL}/${id}`);
  const pokemon = res.json();
}
