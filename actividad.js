function alquilerAuto (tipoDeAuto, diasAlquilados, sillaBebe){
    switch (tipoDeAuto){
        case "Compacto":
            console.log(14000*diasAlquilados)
            break;
        case "Mediano":
            console.log(17000*diasAlquilados)
            break;
        case "Camioneta":
            console.log(28000*diasAlquilados)
            break;
    }
    switch (sillaBebe){
        case "Requiere silla para niños":
            console.log(1200*diasAlquilados)
        break;
    }
    return tipoDeAuto+sillaBebe;
}

console.log("Estimado cliente: en base al tipo de vehículo " + tipoDeAuto + "alquilado, considerando los "+ diasAlquilados + "dias utilizados. El monto total a pagar es de" + alquilerAuto("Camioneta",10,"Requiere silla para niños"));