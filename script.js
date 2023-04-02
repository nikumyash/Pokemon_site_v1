let data = {
    "bulbasaur": {
      "name": "Bulbasaur",
      "type": ["Grass", "Poison"],
      "weight": 6.9
    },
    "ivysaur": {
      "name": "Ivysaur",
      "type": ["Grass", "Poison"],
      "weight": 13.0
    },
    "venusaur": {
      "name": "Venusaur",
      "type": ["Grass", "Poison"],
      "weight": 100.0
    },
    "charmander": {
      "name": "Charmander",
      "type": ["Fire"],
      "weight": 8.5
    },
    "charmeleon": {
      "name": "Charmeleon",
      "type": ["Fire"],
      "weight": 19.0
    },
    "charizard": {
      "name": "Charizard",
      "type": ["Fire", "Flying"],
      "weight": 90.5
    },
    "squirtle": {
      "name": "Squirtle",
      "type": ["Water"],
      "weight": 9.0
    },
    "wartortle": {
      "name": "Wartortle",
      "type": ["Water"],
      "weight": 22.5
    },
    "blastoise": {
      "name": "Blastoise",
      "type": ["Water"],
      "weight": 85.5
    },
    "caterpie": {
      "name": "Caterpie",
      "type": ["Bug"],
      "weight": 2.9
    },
    "metapod": {
      "name": "Metapod",
      "type": ["Bug"],
      "weight": 9.9
    },
    "butterfree": {
      "name": "Butterfree",
      "type": ["Bug", "Flying"],
      "weight": 32.0
    },
    "weedle": {
      "name": "Weedle",
      "type": ["Bug", "Poison"],
      "weight": 3.2
    },
    "kakuna": {
      "name": "Kakuna",
      "type": ["Bug", "Poison"],
      "weight": 10.0
    },
    "beedrill": {
      "name": "Beedrill",
      "type": ["Bug", "Poison"],
      "weight": 29.5
    },
    "pidgey": {
      "name": "Pidgey",
      "type": ["Normal", "Flying"],
      "weight": 1.8
    },
    "pidgeotto": {
      "name": "Pidgeotto",
      "type": ["Normal", "Flying"],
      "weight": 30.0
    },
    "pidgeot": {
      "name": "Pidgeot",
      "type": ["Normal", "Flying"],
      "weight": 39.5
    },
    "rattata": {
      "name": "Rattata",
      "type": ["Normal"],
      "weight": 3.5
    },
    "raticate": {
      "name": "Raticate",
      "type": ["Normal"],
      "weight": 18.5
    }
};
let types_data = {
  "Bug": {
    "color": "#A8B820"
  },
  "Dark": {
    "color": "#705848"
  },
  "Dragon": {
    "color": "#7038F8"
  },
  "Electric": {
    "color": "#F8D030"
  },
  "Fairy": {
    "color": "#EE99AC"
  },
  "Fighting": {
    "color": "#C03028"
  },
  "Fire": {
    "color": "#F08030"
  },
  "Flying": {
    "color": "#A890F0"
  },
  "Ghost": {
    "color": "#705898"
  },
  "Grass": {
    "color": "#78C850"
  },
  "Ground": {
    "color": "#E0C068"
  },
  "Ice": {
    "color": "#98D8D8"
  },
  "Normal": {
    "color": "#A8A878"
  },
  "Poison": {
    "color": "#A040A0"
  },
  "Psychic": {
    "color": "#F85888"
  },
  "Rock": {
    "color": "#B8A038"
  },
  "Steel": {
    "color": "#B8B8D0"
  },
  "Water": {
    "color": "#6890F0"
  }
};

let area = document.querySelector('.main-body');
let cardtemplate = document.querySelector("[pokemon-card]");


let type_displayer = (pokemon)=>{
    let types = pokemon.type;
    let gg = "";
    for(let i of types){ 
        gg+=`<div style=\'background-color:${types_data[i].color}\'>${i}</div>`;
    }
    return gg;
}
// let counter = 0;
// data.array.forEach(element => {
//   counter+=1;
//   const card = cardtemplate.content.clonenode(true).children[0];
//   const img = document.querySelector("[pokemon-img]");
//   const name = document.querySelector("[pokemon-name]");
//   const type = document.querySelector("[pokemon-type]");
//   const weight = document.querySelector("[pokemon-weight]");
//   img.src = `"https://assets.pokemon.com/assets/cms2/img/pokedex/full/${counter}.png"`;
//   name.textContent = element.name;
//   type.textContent = element.type;
//   weight.textContent = element.weight;
// });
let cards_arr = []
let ggg = 0;
for(let key in data){
    let poke = data[key];
    
    ggg+=1;
    let gg = ggg.toString().padStart(3,'0');
    let poke_data = document.createElement('div');
    poke_data.setAttribute('class','pokemon-card');
   
    poke_data.innerHTML = ` <img class = "pokemon_image" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/${gg}.png" alt=${poke.name}>
                            <div class = "pokemon-name">${poke.name}</div>
                            <div class = "pokemon-type">${type_displayer(poke)}</div>
                            <div class = "pokemon-weight">${poke.weight}</div>`
    area.appendChild(poke_data);
    cards_arr.push(poke_data);
}

const search = document.querySelector('#search');
search.addEventListener('input',(e)=>{
  
  const val = e.target.value.toLowerCase();
  console.log(val)
  cards_arr.forEach(pokemon=>{
    const isVisible = pokemon.childNodes[3].textContent.toLowerCase().includes(val);
    pokemon.classList.toggle("hide",!isVisible);
  })
})
