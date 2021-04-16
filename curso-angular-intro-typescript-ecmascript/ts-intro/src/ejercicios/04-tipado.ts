interface Idireccion{
    calle:string;
    pais:string;
    ciudad:string;
}

interface Isuperheroe{
    nombre:string;
    edad:number;
    direccion:Idireccion;
    mostrarDireccion:() =>void;
}

const Odireccion:Idireccion={
    calle:'MS',
    pais:'USA',
    ciudad:'NY'
}
const superheroe: Isuperheroe={
    nombre:'superman',
    edad:30,
    direccion:Odireccion,
    mostrarDireccion(){
        console.log(this.direccion.calle+' '+this.direccion.ciudad);
    }
}
superheroe.mostrarDireccion();

