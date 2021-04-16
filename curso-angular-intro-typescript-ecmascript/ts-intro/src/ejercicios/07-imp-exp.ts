import {Iproducto,calculaIgv  } from "./06-desuctrurcion de funcion";

const carritoCompras: Iproducto[]=[
{
    desc:'tel1',
    precio:20
},
{
    desc:'tel2',
    precio:20
},

];
const [total,igv]=calculaIgv(carritoCompras);
console.log(total,igv);