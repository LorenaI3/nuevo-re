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