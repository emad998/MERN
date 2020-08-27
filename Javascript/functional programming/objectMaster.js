const pokémon = Object.freeze([
        { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
        { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
        { "id": 9,   "name": "Blastoise",  "types": ["water"] },
        { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
        { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
        { "id": 23,  "name": "Ekans",      "types": ["poison"] },
        { "id": 24,  "name": "Arbok",      "types": ["poison"] },
        { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
        { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
        { "id": 52,  "name": "Meowth",     "types": ["normal"] },
        { "id": 63,  "name": "Abra",       "types": ["psychic"] },
        { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
        { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
        { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
        { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
        { "id": 98,  "name": "Krabby",     "types": ["water"] },
        { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
        { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
        { "id": 133, "name": "Eevee",      "types": ["normal"] },
        { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
        { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
        { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
        { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
    ]);

    // an array of pokémon objects where the id is evenly divisible by 3
// let divisbleBy3 = (object) => object.id % 3 === 0;
// let output1 = pokémon.filter(divisbleBy3);
// console.log(output1)



// an array of pokémon objects that are "fire" type
// let typeFire = pokémon.filter(val => val.types.includes('fire'));
// console.log(typeFire);


// an array of pokémon objects that have more than one type
// let moreThanOneType = pokémon.filter(obj => obj.types.length > 1);
// console.log(moreThanOneType)


// an array with just the names of the pokémon
// let pokemonNames = pokémon.map (obj => obj.name)
// console.log(pokemonNames);


// an array with just the names of pokémon with an id greater than 99
// let pokemonAbove99 = pokémon.filter(obj => obj.id > 99).map(obj => obj.name)
// console.log(pokemonAbove99);


// an array with just the names of the pokémon whose only type is poison
// let namesPoison = pokémon.filter(obj => obj.types.includes("poison")).map(obj => obj.name)
// console.log(namesPoison);


// an array containing just the first type of all the pokémon whose second type is "flying"
// let secondType = pokémon.filter(obj => obj.types[1] === "flying");
// console.log(secondType.map(obj => ({name: obj.name, "firstType": obj.types[0]})));



// a count of the number of pokémon that are "normal" type
// let typeNormal = pokémon.filter(obj => obj.types.includes("normal"));
// console.log(typeNormal.length)