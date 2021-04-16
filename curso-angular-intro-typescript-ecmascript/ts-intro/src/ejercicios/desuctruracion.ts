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


const superheroe1: Isuperheroe={
    nombre:'superman',
    edad:30,
    direccion:{
        calle:'MS',
        pais:'USA',
        ciudad:'NY'
    },
    mostrarDireccion(){
        console.log(this.direccion.calle+' '+this.direccion.ciudad);
    }
}
superheroe1.mostrarDireccion();
const {edad,direccion}=superheroe1;
const{calle,pais}=direccion;

console.log(edad,pais);

const dbz:string[]=['goku','vegeta','trunks']
const[,,p3]=dbz
console.log('personaje 3', p3)
