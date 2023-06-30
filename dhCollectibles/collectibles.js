let  fs= require ("fs");

const figura1 = require("./datos/figuras1.json");
const figura2 = require ("./datos/figuras2.json");
const figura3 = require("./datos/figuras3.json");


let fig1 = fs.readFileSync("./datos/figuras1.json", "utf-8");
let fig2 = fs.readFileSync("./datos/figuras2.json", "utf-8");
let fig3 = fs.readFileSync("./datos/figuras3.json", "utf-8");



function importarF(marca){
let arrayMarcas;
    switch(marca){
    case "Hot Toys":
        const dat1= JSON.parse(fig1);
        arrayMarcas = dat1
        break;
    case "Bandai":
        const dat2= JSON.parse(fig2);
        arrayMarcas = dat2
        break;
    case "Star Wars":
        const dat3= JSON.parse(fig3);
        arrayMarcas = dat3
        break;
}
return arrayMarcas
}

//console.log(importarF("Hot Toys"));

module.exports = importarF;