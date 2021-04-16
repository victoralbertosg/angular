export interface Iproducto{
    desc:string;
    precio:number;
}
const telefono: Iproducto={
    desc:'nokia',
    precio:350
}
const tableta: Iproducto={
    desc:'I pad',
    precio:200
}

export function calculaIgv(productos:Iproducto[]):[number,number]{
    let total=0;
    //desuctructar producto.precio =  ({precio})
    productos.forEach (({precio})=>{
        total+=precio;
    })
    return [total, total*0.15];
}
const articulos=[telefono,tableta];
//desuctructurar arreglo
const [total,isv]=calculaIgv(articulos);
console.log(total);
console.log(isv);
