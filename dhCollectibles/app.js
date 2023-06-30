const importa = require("./collectibles");

let hotToys= importa("Hot Toys");
let bandai= importa("Bandai");
let starWars= importa("Star Wars");


let unifiedCollectibles = [...hotToys,...bandai,...starWars];

let collectibles={
    figuras: unifiedCollectibles,
    listFigures: function(){
        this.figuras.forEach(function(figura){
            console.log(figura);
        })
    }, 
    figuresByBrand: function (marca){
            let nuevasFig= this.figuras.filter(function(figuras){
                return figuras.marca == marca
               })
             return nuevasFig;
            }
            
    };