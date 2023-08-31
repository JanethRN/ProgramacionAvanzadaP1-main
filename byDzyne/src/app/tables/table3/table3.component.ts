import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormService } from 'src/app/services/form/form.service';

@Component({
  selector: 'app-table3',
  templateUrl: './table3.component.html',
  styleUrls: ['./table3.component.css']
})
export class Table3Component {
  personas = [
    {
      nombres: 'John',
      apellidos: 'Doe',
      cedula: '123456789',
      telefono: '1234567890',
      correo: 'john.doe@example.com',
      fechaNacimiento: '01/01/1990',
      paisResidencia: 'Ecuador',
      direccion: 'Santo Domingo Av Quevedo',
      sexo: 'Masculino',
      foto1: '../../../assets/images/cedulaProyecto.jpg',
      foto2: '../../../assets/images/cedulaImagenProyecto.jpg'
    },
  ];

  public formsInRevisionTwo: any;

  constructor(
    private formService : FormService,
    private router : Router 
  ){

  }

  ngOnInit(){
    this.getFormsInRevisionThree()
  }

  getFormsInRevisionThree(){
    this.formService.getEnRevisionThree().then((data) => {
      this.formsInRevisionTwo = data;
      console.log(this.formsInRevisionTwo);
    }).catch((error) => {
      console.log(error);
    })
  }

  desactivarPersona(persona: any) {
    // Lógica para aceptar la persona
    console.log('Desactivar:', persona);
  }


}
