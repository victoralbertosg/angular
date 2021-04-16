import { EventEmitter } from '@angular/core';
import { Component, Input, Output} from '@angular/core';

import { Personaje } from '../interfaces/dbz.interface';
import { PersonajesComponent } from '../personajes/personajes.component';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-grabar',
  templateUrl: './grabar.component.html'  
})
export class GrabarComponent  {

  @Input()
  nuevo: Personaje ={
    nombre:'',
    poder:0
  }
 // @Output() 
  //onNuevoPersonaje: EventEmitter<Personaje>=new EventEmitter();

  constructor (private dbzService: DbzService){}

  agregar(){
    if (this.nuevo.nombre.trim().length===0){return;}        
    //this.onNuevoPersonaje.emit(this.nuevo);
    this.dbzService.agregarPersonaje(this.nuevo)
    this.nuevo={
      nombre:'',
      poder:0
    }
  }

}
