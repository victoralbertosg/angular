/*function classDecorator<T extends {new(...args:any[]):{}}>(
    constructor:T
){
    return class extends constructor{
        newproperty='new property';
        hello='hi'
    };
}
@classDecorator
class Misupeclase{
    public mipropiedad:string='Abc';
    imprimir(){
        console.log('hello world')
    }
}

console.log(Misupeclase);
const miclase=new Misupeclase();
console.log(miclase);*/