} ,
{
    "marca": "Bandai",
"nombre": "Hulk",
"precio": 4820,
"stock": 30
} ,
{
    "marca": "Bandai",
"nombre": "Thor",
"precio": 2990,
"stock": 20
} ,
{
    "marca": "Bandai",
"nombre": "Sailor Pluto",
"precio": 4320,
"stock": 5
} ,
{
    "marca": "Bandai",
"nombre": "Sailor Saturn",
"precio": 4580,
"stock": 8
} ,
{
    "marca": "Bandai",
"nombre": "Wonder Woman",
"precio": 5400,
"stock": 11
} 

,
{
    "marca": "Hot Toys",
"nombre": "Hellboy",
"precio": 3120,
"stock": 22
} ,
{
    "marca": "Hot Toys",
"nombre": "Tony Stark",
"precio": 4580,
"stock": 17
} ,
{
    "marca": "Hot Toys",
"nombre": "Black Panther",
"precio": 2240,
"stock": 10
},
{
    "marca": "Hot Toys",
"nombre": "Batman",
"precio": 3050,
"stock": 30
},
{
    "marca": "Hot Toys",
"nombre": "Captain America",
"precio": 4800,
"stock": 23
},
{
    "marca": "Hot Toys",
"nombre": "Superman",
"precio": 5000,
"stock": 20
}
, {
    "marca": "Star Wars",
"nombre": "Scout Trooper",
"precio": 3000,
"stock": 28
} ,
{
    "marca": "Star Wars",
"nombre": "Boba Fett",
"precio": 5900,
"stock": 20
} ,
{
    "marca": "Star Wars",
"nombre": "Dark Trooper",
"precio": 2560,
"stock": 19
} ,
{
    "marca": "Star Wars",
"nombre": "Kessel Run",
"precio": 4590,
"stock": 12
} ,
{
    "marca": "Star Wars",
"nombre": "Jedi",
"precio": 7230,
"stock": 5
} ,
{
    "marca": "Star Wars",
"nombre": "Ashoka Tano",
"precio": 4609,
"stock": 15
} 

const fs = require('fs');

let figuras1= fs.readFileSync(__dirname + '/Datos/figuras1.json', 'utf-8');
let figuras2= fs.readFileSync(__dirname + '/Datos/figuras2.json', 'utf-8');
let figuras3= fs.readFileSync(__dirname + '/Datos/figuras3.json', 'utf-8');

function importFig (marcaFig) {
          let figura;
            if ( marcaFig === "Hot Toys"){
                  figura = JSON.parse(figuras1)
            } else if (marcaFig === "Bandai"){
                  figura = JSON.parse(figuras2)
            } else if (marcaFig === "Star Wars"){
                  figura = JSON.parse(figuras3)
            };
          return figura;
};
//console.log(importFig("Hot Toys")); 

module.exports = importFig; 