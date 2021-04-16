function queTipoSoy <T> (argumento:T){
    return argumento;
}

let soyString=queTipoSoy('hola mundo');
let soynumero=queTipoSoy(3);
let soyarreglo=queTipoSoy([1,2,3]);
let soyexplicito=queTipoSoy<number>(100);