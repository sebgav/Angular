import { calculaISV, Producto } from "./06-desestructuracionParamtros";


const carritoCompras:Producto[]=
[
    {
        desc:'Telefono 1',
        precio:1000
    },
    {
        desc:'Telefono 2',
        precio:2000
    }

]

const [isv,total]=calculaISV(carritoCompras);
console.log('Total',total );
console.log('isv',isv );




    
    
