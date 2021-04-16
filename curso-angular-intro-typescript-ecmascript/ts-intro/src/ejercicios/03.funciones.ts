interface PersonajeLOR{
    nombre:string,
    pv:number;
    mostrarHp:()=>void;
}

function curar(personaje:PersonajeLOR, curarX:number):void{
    personaje.pv+=curarX;
}

const nuevoPersonaje:PersonajeLOR={
    nombre:'victor',
    pv:50,
    mostrarHp(){
            console.log('puntos de vida',this.pv)
    }
}
curar(nuevoPersonaje,30);
nuevoPersonaje.mostrarHp();

