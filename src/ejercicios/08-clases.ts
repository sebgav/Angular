class PersonaNormal
{
  constructor(    public nombre:string,public direccion:string )
  {};
}

class Hero extends PersonaNormal {
   // alterEgo:string;
    //edad:number;
    //nombreReal:number;
    //constructor(alterEgo:string)
    //{
      //  this.alterEgo=alterEgo;
    //} 
    constructor(public alterEgo:string,public edad:number,public nombreReal:string)
    {
      super(alterEgo,"Medellin");
    };

    imprimirNomber()
    {
        return this.alterEgo + ' '+ this.nombreReal 
    }

}
const ironmon=new Hero('ironman',45,'Tony');
console.log(ironmon);






    
    
