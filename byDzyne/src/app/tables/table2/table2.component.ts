import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormService } from 'src/app/services/form/form.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-table2',
  templateUrl: './table2.component.html',
  styleUrls: ['./table2.component.css']
})
export class Table2Component {
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
    private router : Router , private http: HttpClient
  ){

  }

  ngOnInit(){
    this.getFormsInRevisionTwo()
  }

  getFormsInRevisionTwo(){
    this.formService.getEnRevisionTwo().then((data) => {
      this.formsInRevisionTwo = data;
      console.log(data)
    }).catch((error) => {
      console.log(error);
    })
  }


 async aceptarPersona(persona: any, option :string) {
    // Lógica para aceptar la persona
    
  try{
      await this.formService.thirdValidate(persona, option);

      this.router.navigate(['insideapp/table3'])
  }catch( error ){
    console.log(error);
  }
  this.sendEmailerImgA(persona, option);
  }

  async rechazarPersona(persona: any, option :string) {
    // Lógica para rechazar la persona
    try{
      await this.formService.secondValidate(persona, option);

      this.router.navigate(['insideapp/table1'])
    }catch( error ){
    console.log(error);
  }
  this.sendEmailerImgR(persona, option);
  }
  sendEmailerImgA(persona: any, option: string) {
    try {
      // Realizar la solicitud POST a la ruta '/send-emailA'
      this.http.post('http://localhost:3000/send-emailImgA', { persona, option }).subscribe(
        (response) => {
          console.log('Correo electrónico enviado correctamente:');
          // Aquí podrías mostrar una notificación o mensaje en la interfaz de usuario 
        },
        (error) => {
          console.log('Error al enviar el correo electrónico:', error);
          // Aquí podrías mostrar una notificación o mensaje de error en la interfaz de usuario
        }
      );
    } catch (error) {
      console.log('Error:', error);
    }
  }
  sendEmailerImgR(persona: any, option: string) {
    try {
      // Realizar la solicitud POST a la ruta '/send-emailA'
      this.http.post('http://localhost:3000/send-emailImgR', { persona, option }).subscribe(
        (response) => {
          console.log('Correo electrónico enviado correctamente:');
          // Aquí podrías mostrar una notificación o mensaje en la interfaz de usuario 
        },
        (error) => {
          console.log('Error al enviar el correo electrónico:', error);
          // Aquí podrías mostrar una notificación o mensaje de error en la interfaz de usuario
        }
      );
    } catch (error) {
      console.log('Error:', error);
    }
  }

}
