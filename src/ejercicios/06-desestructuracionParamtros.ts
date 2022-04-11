interface Producto{
    desc:string,
    precio:number
}
const telefono:Producto={
    desc:'Novia A01',
    precio:15000
};

const tableta:Producto={
    desc:'airpad',
    precio:15000
};

function calculaISV(productos:Producto[]):number
{
    let total=0;
    productos.forEach(function ({precio,desc})
    {
        total=total+precio;
    })
    return total*0.15;
}

const articulos:Producto[]=[telefono,tableta];
const isv=calculaISV(articulos);

console.log('isv ', isv);