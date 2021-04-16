import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  
})
export class ListadoComponent  {
heroes:string[]=['a','b','c','d','e'];

hb:string="";
borrar():void{
  this.hb=this.heroes.shift()||'';

}
 

}
