const pokemon = require("./data.js");

const game = {
  party: [],
  gyms: [
    { location: "Pewter City", completed: false, difficulty: 1 },
    { location: "Cerulean City", completed: false, difficulty: 2 },
    { location: "Vermilion City", completed: false, difficulty: 3 },
    { location: "Celadon City", completed: false, difficulty: 4 },
    { location: "Fuchsia City", completed: false, difficulty: 5 },
    { location: "Saffron City", completed: false, difficulty: 6 },
    { location: "Cinnabar Island", completed: false, difficulty: 7 },
    { location: "Viridian City", completed: false, difficulty: 8 },
  ],
  items: [
    { name: "potion", quantity: 4 },
    { name: "pokeball", quantity: 8 },
    { name: "rare candy", quantity: 99 },
  ],
};

//console.dir(pokemon, { maxArrayLength: null })
pokemon.findPokemon = (pokeNum) => { //define the function
  let index = undefined;  //initialize the index
  pokemon.forEach((entry) => { //look through each pokemon object in the array
    if (entry.number === pokeNum) {  //check to see if the objects number property is the same as the number passed into the function
      index = pokemon.indexOf(entry); //if it is, sets the index of the entry to index
    }
  });
  return pokemon[index];  //returns the entry at index
};
console.log(pokemon.findPokemon(59).name); //Exercise 1 calling the function findPokemon for pokemon number 59

console.log(game); //Exercise 2
/*
Exercise 3
1. Add a new property to the `game` object. Let's call it "difficulty".
2. Choose a value for "difficulty" that you think fits the game. Ex: "Easy", "Med" or "Hard". How would you assign it?


Solve Exercise 3 here:
*/
game.difficulty = "Hard";  //creating a new property for game and initializing it to Hard

/*
Exercise 4
1. Select a starter Pokémon from the `pokemon` array. Remember, a starter Pokémon's `starter` property is true.
2. Add this Pokémon to the `game.party` array. Which array method will you use to add them?


Solve Exercise 4 here:
*/

let starterPokemons = pokemon.filter((entry) => entry.starter === true);  //filter out all the pokemon so we only have an array with the starting pokemon
game.party.push(starterPokemons.find((entry) => entry.type === "electric"));  //choose our starting pokemon based on its type being electric

/*
Exercise 5
1. Choose three more Pokémon from the `pokemon` array and add them to your party.
2. Consider different attributes like 'type' or 'HP' for your selection. Which array method will you use to add them?


Solve Exercise 5 here:
*/

for (let i = 0; i < 3; i++) { //go through this porcess three time
  nextPokemonInd = Math.floor(Math.random() * 151); //pick a random index between 0 and 151 since there are 151 entries
  game.party.push(pokemon[nextPokemonInd]);  //push the object at nextPokemonInd onto the game.party array
}

/*
Exercise 6
1. Set the `completed` property to true for gyms with a difficulty below 3.
2. Think about how you'd loop through the `gyms` array to check and update the `completed` property.


Solve Exercise 6 here:
*/
game.gyms.forEach((gym) => {  //for each gym object in the array gyms
  if (gym.difficulty < 3) {  //check is the difficulty property is less than 3
    gym.completed = true;  //if it is, set the completed property to true
  }
});

/*
Exercise 7
1. Evolve the starter Pokémon you added to your party earlier. Each starter Pokémon evolves into a specific one.
2. How would you replace the current starter Pokémon in your party with its evolved form?

Hint: 
  - Pokemon 1: Bulbasaur evolves into Pokemon 2: Ivysaur
  - Pokemon 4: Charmander evolves into Pokemon 5: Charmeleon
  - Pokemon 7: Squirtle evolves into Pokemon 8: Wartortle
  - Pokemon 25: Pikachu evolves into Pokemon 26: Raichu

More Hints: The existing starter Pokemon will be *replaced* in your party with the Pokemon it evolved into. When working with an array of objects, the splice() array method is ideal for replacing one element with another. 


Solve Exercise 7 here:
*/
let starterNum = game.party[0].number;  //starter pokemon is the first pokemon in your party, so index 0, and collect the number property from the object
let evolveNum = starterNum + 1; //add one to the value of the starter number
let evolvePokemon = undefined; //initialize the evolved pokemon to undefined
pokemon.forEach((entry) => { //go through each object in our array pokemon
  if (entry.number === evolveNum) evolvePokemon = entry; //check if the number property of the object is equal to the number value of our evolved pokemon
});                                                      //if so set evolvePokemon to the object with number value evolveNum
game.party.splice(0, 1, evolvePokemon);  //use splice to delete the starter pokemon (at index 0) and insert the object evolvePokemon into the array

/*
Exercise 8
1. Print the name of each Pokémon in your party.
2. Consider using a loop or an array method to access each Pokémon's name.

Solve Exercise 8 here:
*/

game.party.forEach((pokemon) => {  //go through each entry in the array of your party
  console.log(pokemon.name);       //and print just the name value of the object
});

/*
Exercise 9
1. Can you print out all the starter Pokémon from the `pokemon` array?
2. Think about how you can identify a starter Pokémon and then log their names.


Solve Exercise 9 here:
*/
console.log(starterPokemons) //since I already filtered the pokemon by starter in exercise 4, I just need to print the array

/*
Exercise 10
Create a method called `catchPokemon` and add it to the `game` object. You should not need to edit the original game object directly. This method should:
  - Accept an object as a parameter called `pokemonObj`
  - Add the `pokemonObj` to the `game.party` array.
  - not return anything

After writing this method, call it and pass in a Pokemon object of your choice from the `pokemon` data to catch it.

Solve Exercise 10 here:
*/
game.catchPokemon = (pokemonObj) => { //create a method that takes an object and pushes it onto the game.party array
  game.party.push(pokemonObj)
}

game.catchPokemon(pokemon.find((entry) => entry.name === 'Doduo')) //choose to push the pokemon object with name value Doduo

/*
Exercise 11
1. Copy the `catchPokemon` method that you just wrote above, and paste it below. Modify it so that it also decreases the number of pokeballs in your inventory each time you catch a Pokémon.
2. How will you find and update the quantity of pokeballs in the `game.items` array?

Tips:
For this exercise, it's okay to have a negative number of pokeballs.
After updating the method, call it and pass in a Pokemon object of your choice from the `pokemon` data to catch it.
Also, log the `game.items` array to confirm that the pokeball quantity is being decremented.

Solve Exercise 11 here:
*/
let pokeballsItem = game.items.find((entry) => entry.name === 'pokeball') //set variable name pokeballsItem to the object with name value pokeball in game
game.catchPokemon = (pokemonObj) => { //define the method catchPokemon
  game.party.push(pokemonObj) //pushes the pokemon object onto the party array
  pokeballsItem.quantity -= 1 //decreases the quantity value from our object by one
}
game.catchPokemon(pokemon.find((entry) => entry.name === 'Dewgong'))  //call catchPokemon on the object with name value Dewgong

console.log(game.items) //shows that our pokeball quantity is down one since we only caught one pokemon

/*
Exercise 12
1. Similar to Exercise 6, now complete gyms with a difficulty below 6. How will you approach this?
 (change the value of `complete` in the qualifying objects from false to true).

Solve Exercise 12 here:
*/
game.gyms.forEach((gym) => {  //exact same function except change the 3 to a 6 for the new difficulty
  if (gym.difficulty < 6) {
    gym.completed = true;
  }
});

/*
Exercise 13
1. Create a `gymStatus` method in `game` to tally completed and incomplete gyms.
2. How will you iterate through the `gyms` array and update the tally? Remember to log the final tally.

This method should:
  - Not accept any arguments.
  - Initially create a constant `gymTally`, which is an object that has two 
    properties: `completed` and `incomplete`, both of which are initially set to 0.
  - Iterate through the objects in the `game.gyms` array and update the 
    properties on `gymTally` as follows: 
    - `completed` should count how many gyms in the array have a value of `true` 
      for their `completed` property. 
    - `incomplete` should count how many gyms in the array have a value of 
      `false` for their `completed` property.
  - Log the value of `gymTally`.
  - The method should not return anything.

For example, if five gym objects have a value of `true` on their `completed` property and three gym objects have a value of `false` on their `completed` property, the logged value would be: `{ completed: 5, incomplete: 3 }`.

Solve Exercise 13 here:
*/
let gymTally = { //create the object
  completed : 0, //with the initialized properties
  incomplete :0,
}
game.gymStatus = () => { //define the function
  game.gyms.forEach((gym) => {  //go to each gym object on the gyms array
    if (gym.completed) gymTally.completed++ //check if the completed value is true, if so, add one to the completed property value of gymTally
    else gymTally.incomplete++  //if not, add one to the incomplete property value of gymTally
  })
}
game.gymStatus() //call the function to get the status
console.log(gymTally) //print the object gymTally

/*
Exercise 14
1. Add a `partyCount` method to `game` that counts the number of Pokémon in your party.

This method should:
  - Not accept any arguments.
  - Count the number of Pokemon in the party.
  - return the found number of Pokemon in the party.

Solve Exercise 14 here:
*/
game.partyCount = () => { //define the method
  return game.party.length //since each pokemon object is an element on the array, we just need to know the array's length to know how many pokemon are in our party
}
console.log(game.partyCount()) //log out and call the function

/*
Exercise 15
1. Now, complete gyms with a difficulty below 8. Reflect on how this is similar to or different from the previous gym exercises.
(change the value of `complete` in the qualifying objects from false to true).

Solve Exercise 15 here:
*/
game.gyms.forEach((gym) => {  //exact same function except change the 6 to a 8 for the new difficulty
  if (gym.difficulty < 8) {
    gym.completed = true;
  }
});

/*
Exercise 16
1. Log the entire `game` object to the console. Take a moment to review the changes you've made throughout the exercises.


Solve Exercise 16 here:
*/

console.log(game)
/*
Exercise 17
1. Arrange the Pokémon in `game.party` by their HP. The one with the highest HP should come first.
2. You'll need to use the `.sort()` method. How does the compare function work in sorting numbers?


Solve Exercise 17 here:
*/

game.party.sort((a,b) => b.hp - a.hp) //use the sort method to go through each object and sort from high to low based on the hp property of each pokemon
console.log(game.party)
/*
Exercise 18
Add a new property to the `game` object called `collection` and initialize its value to an empty array.

Copy the `catchPokemon` method you wrote in Exercise Twelve and paste it below. Modify it so that:
  - Ensure that no more than six Pokemon can be in the party at any time. 
    Excess Pokemon should be placed in the `game.collection` array.
  - It's up to you how to distribute Pokemon in a situation where more than six 
    would be placed into the `game.party` array.

Again, for this exercise, it's okay to have a negative number of pokeballs.

After updating the method, use it by calling it and passing in a pokemon object of your choice from the `pokemon` data to catch it.

Also, log the `game.items` array to confirm that the pokeball quantity is being decremented.

Solve Exercise 18 here:
*/


game.collection = []

game.catchPokemon = (pokemonObj) => { //define the method catchPokemon
  pokeballsItem.quantity -= 1 //decreases the quantity value from our object by one
  game.party.push(pokemonObj) //pushes the pokemon object onto the party array
  if (game.party.length > 6){
    game.party.sort((a,b) => b.hp - a.hp) //use the sort method to go through each object and sort from high to low based on the hp property of each pokemon
    game.collection.push(game.party.pop())
  } 
}
game.catchPokemon(pokemon[Math.floor(Math.random()*151)])
console.log(game.items)

/*
Exercise 19
Copy the `catchPokemon` method that you just wrote above, and paste it below. The time has come to make it so that we cannot catch a Pokemon when we do not have any pokeballs to catch it with. 

Modify the method so that if there are no pokeballs a message will be displayed that there are not enough pokeballs to catch the desired Pokemon.

Also, ensure that the Pokemon isn't added to the `game.party` or the `game.collection`.

Solve Exercise 19 here:
*/

game.catchPokemon = (pokemonObj) => { //define the method catchPokemon
  if (pokeballsItem.quantity > 0){
    pokeballsItem.quantity -= 1 //decreases the quantity value from our object by one
    game.party.push(pokemonObj) //pushes the pokemon object onto the party array
    if (game.party.length > 6){
      game.party.sort((a,b) => b.hp - a.hp) //use the sort method to go through each object and sort from high to low based on the hp property of each pokemon
      game.collection.push(game.party.pop()) //removes the pokemon with the lowest hp from our party and puts it in our collection
    }
  }
  else {
    console.log('You are out of pokeballs!!!')
  }   
}
game.catchPokemon(pokemon[Math.floor(Math.random()*151)]) //calling the catchPokemon method as many times as we have pokeballs
game.catchPokemon(pokemon[Math.floor(Math.random()*151)])
game.catchPokemon(pokemon[Math.floor(Math.random()*151)])
game.catchPokemon(pokemon[Math.floor(Math.random()*151)])
game.catchPokemon(pokemon[Math.floor(Math.random()*151)])
game.catchPokemon(pokemon[Math.floor(Math.random()*151)])
console.log(game.items)                                   //confirming we are out of pokeballs
game.catchPokemon(pokemon[Math.floor(Math.random()*151)]) //trying to add one more pokemon but are out of pokeballs