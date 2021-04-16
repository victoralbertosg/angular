interface Personaje{
    nombre:string;
    hp:number;
    habilidades:string[];
    puebloNatal?:string;
}

const personaje:Personaje={
    nombre:'victor',
    hp:100,
    habilidades:['aaaa','bbbb','cccc']
}
personaje.puebloNatal='dasd';
console.table(personaje);

