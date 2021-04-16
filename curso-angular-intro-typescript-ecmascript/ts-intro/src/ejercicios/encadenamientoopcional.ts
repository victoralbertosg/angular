class PersonaNormal{
    constructor(
        public nombre:string,
        public direccion:string       
    ) {}
}
class Heroe extends PersonaNormal{
    constructor(
        public alterEgo:string,
        public edad:number,
        public nombrereal:string
    ){
        super(nombrereal,'ny')
    }
}
const iroman=new Heroe ('iroman',45,'tony');
console.log(iroman);