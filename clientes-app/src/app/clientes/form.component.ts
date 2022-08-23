import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';
import { ClienteService } from './cliente.service';
import { Router, ActivatedRoute } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent implements OnInit {

  public cliente:Cliente = new Cliente();
  titulo = 'El formulario de tu madre';
  constructor(private clienteService: ClienteService, private router:Router, private activateRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.cargarCliente();
  }

  public create(): void {
    this.clienteService.create(this.cliente).subscribe(
      response => {

        this.router.navigate(['/clientes'])
        swal('Nuevo cliente', `El cliente ${this.cliente.nombre} ha sido creado con éxito`, 'success');

      } 
    )
  }

  cargarCliente():void{

    this.activateRoute.params.subscribe(params =>{
      let id = params['id']
      if(id){
        this.clienteService.getCliente(id).subscribe((cliente) => this.cliente = cliente)
      }
    })

  }

  update():void{
    this.clienteService.update(this.cliente)
    .subscribe(cliente => {
      this.router.navigate(['/clientes'])
      swal('Cliente actualizado', `El cliente ${this.cliente.nombre} ha sido actualizado con éxito`, 'success');

    }
      
      );
  }


  

}
