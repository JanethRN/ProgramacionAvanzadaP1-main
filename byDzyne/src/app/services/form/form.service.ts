import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from '../API_URL';
@Injectable({
  providedIn: 'root'
})

export class FormService {
  
  constructor(private http : HttpClient) {

   }

   // Obtener los datos de formulario con Validacion1: "Revision"
   async getEnRevision(){
    return new Promise((resolve, reject) => {
      this.http.get(API_URL + '/customerOpenCount/getFormularioEnRevision').subscribe({
        next : (data) => {
          resolve(data);
        },
        error: (err) => {
          reject(err)
      }
    });
    })
   }

// Obtener los datos de formulario con Validacion1: "Revision" por id
   async getEnRevisionPorId(id : string){
    return new Promise((resolve, reject) => {
      this.http.get(API_URL + '/customerOpenCount/getFormularioEnRevisionPorId/'+id).subscribe({
        next : (data) => {
          resolve(data);
        },
        error: (err) => {
          reject(err)
      }
    });
    })
   }

   // Obtener los datos de formulario con Validacion1: "Revision" y Validacion1: "Aprobado"
   async getEnRevisionTwo(){
    return new Promise((resolve, reject) => {
      this.http.get(API_URL + '/customerOpenCount/getFormularioEnRevisionTwo').subscribe({
        next : (data) => {
          resolve(data);
        },
        error: (err) => {
          reject(err)
      }
    });
    })
   }

   async getEnRevisionThree(){
    return new Promise((resolve, reject) => {
      this.http.get(API_URL + '/customerOpenCount/getFormularioEnRevisionThree').subscribe({
        next : (data) => {
          resolve(data);
        },
        error: (err) => {
          reject(err)
      }
    });
    })
   }

   sendEmailerA(persona: any) {
   
      // Realizar la solicitud POST a la ruta '/send-emailA'
      return new Promise((resolve, reject) => {
      this.http.post(API_URL+'/send-emailA', 
      { persona 
      }).subscribe({
        next : (data) =>{
          resolve(data)
        },

        error: (err) => {
          reject(err)
        }

      });
      })
  
  }
   sendEmailerR(persona: any) {
  
      // Realizar la solicitud POST a la ruta '/send-emailA'

    return new Promise((resolve, reject)=> {
      this.http.post(API_URL+'/send-emailR', 
      { persona 
      }).subscribe(
        {
          next : (data) => {
            resolve(data)
          },
          error : (err) => {
            reject(err)
          }
        }
      )
    })
     
   
  }

   async firstValidate(persona :any, option : string){
    return new Promise((resolve, reject) => {
      this.http.put(API_URL+ '/customerOpenCount/formularioFirstValidacion', {
        idform      :  persona.idform,
        validacion1 :  option 
      }).subscribe({
        next : (data) => {
          resolve(data);
         
        },
        error: (err) => {
          reject(err)
      }
    });
    })
   }


  // Nueva imagen
  async uploadImage(persona :any, option : string){
    console.log("persona"+persona);
    console.log(option);

    persona.imag2=option;
    return new Promise((resolve, reject) => {
      this.http.put(API_URL+ '/customerOpenCount/formularioSubirSegundaImagen', {
        /* ci      :  persona.ci,
        imag2 :  option  */
        ...persona,
      }).subscribe({
        next : (data) => {
          resolve(data);
        },
        error: (err) => {
          reject(err)
      }
    });
    })
   }



   async secondValidate(persona :any, option : string){
    return new Promise((resolve, reject) => {
      this.http.put(API_URL+ '/customerOpenCount/formularioSecondValidacion', {
        idform      :  persona.idform,
        validacion3 :  option 
      }).subscribe({
        next : (data) => {
          resolve(data);
        },
        error: (err) => {
          reject(err)
      }
    });
    })

   }

   async thirdValidate(persona :any, option : string){
    return new Promise((resolve, reject) => {
      this.http.put(API_URL+ '/customerOpenCount/formularioThirdValidacion', {
        idform      :  persona.idform,
        validacion3 :  option 
      }).subscribe({
        next : (data) => {
          resolve(data);
        },
        error: (err) => {
          reject(err)
      }
    });
    })

   }

}
