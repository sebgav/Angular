interface SuperHoroe{
nombre:string,
edad:number,
direccion:Direccion,
    mostrarDireccion:()=>string;
}
interface Direccion{
    calle:string,
    pais:string,
    ciudad:string
}

const superHeroe: SuperHoroe=
{
    nombre:'Spiderman',
    edad:30,
    direccion:{
        calle:'Mais St',
        pais:'USA',
        ciudad:'NY'
    },
    mostrarDireccion()
    {
        return this.nombre + ' , '+ this.direccion.ciudad + ' , ' + this.direccion.pais
    }
}
const direccion= superHeroe.mostrarDireccion();
console.log(direccion);