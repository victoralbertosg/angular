interface Pasajero{
    nombre:string,
    hijos?:string[],
}

const pasajero2:Pasajero={
    nombre:'meiliza',
    hijos:['s','a']
}
const pasajero1:Pasajero={
    nombre:'mirian',

}

function imprimeHijos(pasajero:Pasajero):void{
    const canthijos=pasajero.hijos?.length||0;
    console.log(canthijos);
}
imprimeHijos(pasajero1);