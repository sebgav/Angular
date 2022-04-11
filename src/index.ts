interface Reproductor{
    volumen:number,
    segundo:number,
    cancion:string,
    detalle:Detalles
}
interface Detalles{
    autor:string,
    anio:number
}
const reproductor:Reproductor=
{
    volumen:90,
    segundo:36,
    cancion:'Mess',
    detalle:
    {
        autor:'Ed Sheeran',
        anio:2015
    }
}
const {volumen,segundo,cancion,detalle}=reproductor;
const{autor}=detalle;

console.log('El volumen actual es '+ volumen);
console.log('El segundo actual es '+ segundo);
console.log('El cancion actual es '+ cancion);
console.log('El autor actual es '+ autor);


