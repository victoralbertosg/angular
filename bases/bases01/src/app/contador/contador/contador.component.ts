import { Component } from '@angular/core';

@Component({
    selector:'app-contador',
    template:`
    <h1>{{title}}</h1>
<h3>{{base}}</h3>
<button (click)="acumular(base)">+1</button>
<span>{{numero}}</span>
<button (click)="acumular(base *-1 )">-1</button>
    `
}
)
export class ContadorComponent{
    title :string= 'bases01';
    numero : number=10;
    base: number=5;
  
    acumular(valor:number){
      this.numero+=valor;
    }
}