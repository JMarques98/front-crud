import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directiva',
  templateUrl: './directiva.component.html',
  styleUrls: ['./directiva.component.css']
})
export class DirectivaComponent{

  listaCurso:string[] = ['Amor','Pasión','Esfuerzo','Trabajo','Milcosasmasbebe'];
 
  habilitar:boolean = true;
 
  constructor() { }

  setHabilitar():void{
    this.habilitar = (this.habilitar==true)?false:true;
  }


}
