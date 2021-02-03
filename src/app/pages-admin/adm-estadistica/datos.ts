


export class datos{

public cantidadRotas=0;
 public cantidadDisp=0;

 constructor(){
     /*
     this.data();
     console.log("constructor "+this.cantidadRotas);
     */
 }
    

    
    public getCantidadRotas() : number {
        return this.cantidadRotas; }

    
    public getCantidadDisp() : number {
        return this.cantidadRotas;
    }

    public data(){

    fetch('http://localhost:3000/bicicletas/leerBicicleta')
    .then((resultado)=>{
        return resultado.json();
      })
      .then((json)=>{
          for(let bici of json){
            if(bici.estado=='rota'){
                this.cantidadRotas=7;
                
            }else{
                this.cantidadDisp=4;
            }

          }
        
      }).catch()


      console.log(" final"+ this.cantidadDisp);

    }
    
    


}
