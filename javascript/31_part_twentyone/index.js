// fetch = Function used for making HTTP requests to fetch resources.
//         (JSON style data, images, files)
//         Simplifies asynchronous data fetching in JavaScript and
//         used for interacting with APIs to retrieve and send
//         data asynchronously over the web.
//         fetch(url, {options})

async function fetchData(){

    try{

        const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

        if(!response.ok){
            throw new Error("Could not fetch resource");
        }

        const data = await response.json();
        const pokemonSprite = data.sprites.front_default;
        const imgElement = document.getElementById("pokemonSprite");
        const pokemonAbilities = data.abilities.map(ability => ability.ability.name).join(", ");
        const pokemonForms = data.forms.map(form => form.name).join(", ");
        const pokemonTypes = data.types.map(type => type.type.name).join(", ");

        const stats = `Abilities: ${pokemonAbilities} Forms: ${pokemonForms} Types: ${pokemonTypes}`;
        document.getElementById("stats").textContent = stats;

        imgElement.src = pokemonSprite;
        imgElement.style.display = "block";
    }
    catch(error){
        console.error(error);
    }
}