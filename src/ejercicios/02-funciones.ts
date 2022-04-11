function sumar (a:number,b:number):number
{
    return (a+b);
}
const sumarFlecha=(a:number,b:number):number=>
{
    return a+b;
}

function multiplicar(numero:number,otroNumero?:number,base:number=2):number
{
    return numero*base;
}
const resultado=sumar(10,20);
const resultadoMult=multiplicar(5,10);

console.log(sumarFlecha(1,2));
console.log(resultado);
console.log(resultadoMult)

interface PersonaLOR{
    hv:number,
    nombre:string,
    mostrarHp:()=>void
        
    }


function curar(personaje:PersonaLOR, curarX:number):void
{
    personaje.hv+=curarX;
    console.log('Puntos de vida',personaje.hv);


}
const nuevoPersonaje:PersonaLOR={
    hv:50,
    nombre:'sebas',
    mostrarHp(){
        console.log('Puntos de vida',this.hv);
    }
}

curar(nuevoPersonaje,60);
