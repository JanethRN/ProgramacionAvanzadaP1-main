import { ChangeDetectionStrategy } from '@angular/core';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormService } from 'src/app/services/form/form.service';
import { HttpClient } from '@angular/common/http';




interface IForm{
  name : string,
  lastname   : string,
  ci  : string,
  telf:string,
  email : string,
  date: string,
  country : string,
  location :string,
  gender : string,
  imag : string
}

@Component({
  selector: 'app-table1',
  templateUrl: './table1.component.html',
  styleUrls: ['./table1.component.css'],
 
})
export class Table1Component {


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
      foto1: '../../../assets/images/cedulaProyecto.jpg'
    },
   
  ];

  public formsInRevision: any;

  constructor(private formService : FormService,
    private router : Router, private http: HttpClient
    ){

  }

  ngOnInit(){
 
    this.getFormsInRevision()
  }

  getFormsInRevision(){
    this.formService.getEnRevision().then((data) => {
      this.formsInRevision = data;
      console.log(this.formsInRevision);
    }).catch((error) => {
      console.log(error);
    })
  }

  async aceptarPersona (persona: any, option : string) {
    // Lógica para aceptar la persona
    try{
      
        /* this.formService.sendEmailerA(persona, option); */
        await this.formService.firstValidate(persona, option)
        this.router.navigate(['insideapp/table2'])
    }catch( error ){
      console.log(error);
    }
    
  }

  async rechazarPersona(persona: any, option : string) {
    // Lógica para rechazar la persona
    try{
     
      await this.formService.firstValidate(persona, option)
      this.router.navigate(['insideapp/table1'])
    }catch( error ){
      console.log(error);
    }
    
  } 

  sendEmailerA(persona: any, option: string) {
    try {
      // Realizar la solicitud POST a la ruta '/send-emailA'
      this.http.post('http://localhost:3000/send-emailA', { persona, option }).subscribe(
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
  sendEmailerR(persona: any, option: string) {
    try {
      // Realizar la solicitud POST a la ruta '/send-emailA'
      this.http.post('http://localhost:3000/send-emailR', { persona, option }).subscribe(
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
