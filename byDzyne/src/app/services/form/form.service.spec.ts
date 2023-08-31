import { TestBed } from '@angular/core/testing';

import { FormService } from './form.service';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { API_URL } from '../API_URL';

describe('FormService', () => {
  let service: FormService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports : [HttpClientTestingModule]
    });
    service   = TestBed.inject(FormService);  
    httpMock  = TestBed.inject(HttpTestingController)
  });

  afterEach(() => {
    httpMock.verify();
  })


  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('Test for getEnRevision',() => {
    it('Se debe retornar un arreglo de objetos con atributos validacion1 y validation2 con valor \'\'', () => {

      const resObj = [
        {
            "idform": "h6BTAPK1jNOAanrYO83r",
            "date": "2000-09-27",
            "country": "Colombia",
            "gender": "Hombre",
            "ci": "2350793219",
            "lastname": "apellido1",
            "name": "nombre1",
            "location": "\nLA Floresta",
            "validacion2": "",
            "imag": "C:\\fakepath\\cedulaProyecto.jpg",
            "telf": "0980167849",
            "email": "alfredsteveen.456@gmail.com",
            "imag2": "C:\\fakepath\\Captura de pantalla (1).png",
            "validacion1": "",
            "validacion3": ""
        }
    ]
  
  
  
      service.getEnRevision().then((res : any) => {
       res.forEach((obj : any )=> {
        expect(obj.validacion1 === '' 
        && obj.validacion2 === ''
        && obj.validacion3 === ''
        ).toBeTrue(); 
       })
      }).catch((error) => {
        console.log(error);
      })
  
      const req = httpMock.expectOne(API_URL + '/customerOpenCount/getFormularioEnRevision')
      expect(req.request.method).toEqual('GET');
      req.flush(resObj);
    })

    it('Se debe retornar un arreglo vacío', () => {

      const resObj :any = [
  
      ]
  
  
  
      service.getEnRevision().then((res : any) => {
     
        expect(res).toEqual([]); 
      
      }).catch((error) => {
        console.log(error);
      })
  
      const req = httpMock.expectOne(API_URL + '/customerOpenCount/getFormularioEnRevision')
      expect(req.request.method).toEqual('GET');
      req.flush(resObj);
    })




  })

  describe('Test for getEnRevisionPorId',() => {
    it('Se debe retornar un objeto con validacion1: revisado, validacion2: \'\' y validacion3: \'\' ', () => {
      
      const restObj = 
      {
        "idform": "h6BTAPK1jNOAanrYO83r",
        "date": "2000-09-27",
        "country": "Colombia",
        "gender": "Hombre",
        "ci": "2350793219",
        "lastname": "apellido1",
        "name": "nombre1",
        "location": "\nLA Floresta",
        "validacion2": "",
        "imag": "C:\\fakepath\\cedulaProyecto.jpg",
        "telf": "0980167849",
        "email": "alfredsteveen.456@gmail.com",
        "imag2": "C:\\fakepath\\Captura de pantalla (1).png",
        "validacion1": "revisado",
        "validacion3": ""
    }
    
  
    let id = 'h6BTAPK1jNOAanrYO83r';
  
      service.getEnRevisionPorId(id).then((res : any) => {
      
        expect(res.validacion1 === 'revisado' 
        && res.validacion2 === ''
        && res.validacion3 === ''
        ).toBeTrue(); 
  
      }).catch((error) => {
        console.log(error);
      })
  
      const req = httpMock.expectOne(API_URL + '/customerOpenCount/getFormularioEnRevisionPorId/'+id)
      expect(req.request.method).toEqual('GET');
      req.flush(restObj);
    })


  })

  describe('Test for getEnRevisionTwo', () => {

    it('Debe retornar un arreglo de objetos con atributos valdacion1: revisado , validacion2: revisado y validacion3: \'\'', () => {

        const restObj = [
          {
              "idform": "gLbXqs3Cf3gjMoYjUvLa",
              "date": "2000-09-09",
              "country": "Ecuador",
              "gender": "Mujer",
              "ci": "2350297533",
              "lastname": "renteria narvaez",
              "imag2": "",
              "name": "julissa janeth",
              "location": "copp 17 de diceimbre",
              "imag": "C:\\fakepath\\firma.png",
              "telf": "0986609322",
              "email": "jjrenteria@espe.edu.ec",
              "validacion3": "",
              "validacion1": "revisado",
              "validacion2": "revisado"
          }
      ]


      service.getEnRevisionTwo().then((res : any) => {
        res.forEach((obj : any )=> {
         expect(obj.validacion1 === 'revisado' 
         && obj.validacion2 === 'revisado'
         && obj.validacion3 === ''
         ).toBeTrue(); 
        })
       }).catch((error) => {
         console.log(error);
       })

      const req = httpMock.expectOne(API_URL + '/customerOpenCount/getFormularioEnRevisionTwo')
      expect(req.request.method).toEqual('GET');
      req.flush(restObj);

    })


    it('Se debe retornar un arreglo vacío', () => {

        const resObj : any= [];
    
    
    
        service.getEnRevisionTwo().then((res : any) => {
       
          expect(res).toEqual([]); 
        
        }).catch((error) => {
          console.log(error);
        })
    
        const req = httpMock.expectOne(API_URL + '/customerOpenCount/getFormularioEnRevisionTwo')
        expect(req.request.method).toEqual('GET');
        req.flush(resObj);
    })

    })


  describe('Test for getEnRevisionThree',() => {

    it('Debe retornar un arreglo de objetos con atributos valdacion1: revisado , validacion2: revisado y validacion3: revisado', () => {

        const restObj = [
          {
              "idform": "gLbXqs3Cf3gjMoYjUvLa",
              "date": "2000-09-09",
              "country": "Ecuador",
              "gender": "Mujer",
              "ci": "2350297533",
              "lastname": "renteria narvaez",
              "imag2": "",
              "name": "julissa janeth",
              "location": "copp 17 de diceimbre",
              "imag": "C:\\fakepath\\firma.png",
              "telf": "0986609322",
              "email": "jjrenteria@espe.edu.ec",
              "validacion3": "revisado",
              "validacion1": "revisado",
              "validacion2": "revisado"
          }
      ]


      service.getEnRevisionThree().then((res : any) => {
        res.forEach((obj : any )=> {
         expect(obj.validacion1 === 'revisado' 
         && obj.validacion2 === 'revisado'
         && obj.validacion3 === 'revisado'
         ).toBeTrue(); 
        })
       }).catch((error) => {
         console.log(error);
       })

      const req = httpMock.expectOne(API_URL + '/customerOpenCount/getFormularioEnRevisionThree')
      expect(req.request.method).toEqual('GET');
      req.flush(restObj);

    })


    })


  describe('Test for firsValidate', ()=>{

    it('Se devuelve el mensaje de que se ha hecha la primera validación', () => {
      const resObj = {
        msg : "Primera validación con éxito"
      }

    const person = {
    "idform": "SSLGGbeYjCWR6ynEdOpa",
    "date": "1972-12-25",
    "country": "Ecuador",
    "gender": "Hombre",
    "ci": "2350060915",
    "lastname": "Hamma Lught",
    "imag2": "",
    "name": "Yuichiro Baki",
    "location": "La dirección",
    "validacion2": "",
    "imag": "C:\\fakepath\\Captura de pantalla (1).png",
    "telf": "0939494716",
    "email": "yuichiro@gmail.com",
    "validacion3": "",
    "validacion1": ""
    };
    service.firstValidate(person, 'revisado').then((res : any) => {
      
    expect(res).toEqual(resObj);
    }).catch((error) => {
    console.log(error);
    })


    const req = httpMock.expectOne(API_URL+'/customerOpenCount/formularioFirstValidacion');
    expect(req.request.method).toEqual('PUT');
    req.flush(resObj);



    })
    
  })


  describe('Test for SecondValidate', ()=>{

    it('Se devuelve el mensaje de que se ha hecha la segunda validación', () => {
      const resObj = {
        msg : "Segunda validación con éxito"
      }

    const person = {
    "idform": "SSLGGbeYjCWR6ynEdOpa",
    "date": "1972-12-25",
    "country": "Ecuador",
    "gender": "Hombre",
    "ci": "2350060915",
    "lastname": "Hamma Lught",
    "imag2": "",
    "name": "Yuichiro Baki",
    "location": "La dirección",
    "validacion2": "",
    "imag": "C:\\fakepath\\Captura de pantalla (1).png",
    "telf": "0939494716",
    "email": "yuichiro@gmail.com",
    "validacion3": "",
    "validacion1": "revisado"
    };
    service.secondValidate(person, 'revisado').then((res : any) => {
      
    expect(res).toEqual(resObj);
    }).catch((error) => {
    console.log(error);
    })


    const req = httpMock.expectOne(API_URL+'/customerOpenCount/formularioSecondValidacion');
    expect(req.request.method).toEqual('PUT');
    req.flush(resObj);
    })
  })

  describe('Test for ThirdValidate', ()=>{

    it('Se devuelve el mensaje de que se ha hecha la tercera validación', () => {
      const resObj = {
        msg : "Tercera validación con éxito"
      }

    const person = {
    "idform": "SSLGGbeYjCWR6ynEdOpa",
    "date": "1972-12-25",
    "country": "Ecuador",
    "gender": "Hombre",
    "ci": "2350060915",
    "lastname": "Hamma Lught",
    "imag2": "",
    "name": "Yuichiro Baki",
    "location": "La dirección",
    "validacion2": "revisado",
    "imag": "C:\\fakepath\\Captura de pantalla (1).png",
    "telf": "0939494716",
    "email": "yuichiro@gmail.com",
    "validacion3": "",
    "validacion1": "revisado"
    };
    service.thirdValidate(person, 'revisado').then((res : any) => {
      
    expect(res).toEqual(resObj);
    }).catch((error) => {
    console.log(error);
    })


    const req = httpMock.expectOne(API_URL+'/customerOpenCount/formularioThirdValidacion');
    expect(req.request.method).toEqual('PUT');
    req.flush(resObj);
    })
  })

  describe('Test for sendEmailerA', ()=>{

    it('Se devuelve el mensaje de que se ha hecha enviado el correo', () => {
      const resObj = {
        msg : "Email enviado para ingreso de segunda imagen"
      }

    const person = {
    "idform": "SSLGGbeYjCWR6ynEdOpa",
    "date": "1972-12-25",
    "country": "Ecuador",
    "gender": "Hombre",
    "ci": "2350060915",
    "lastname": "Hamma Lught",
    "imag2": "",
    "name": "Yuichiro Baki",
    "location": "La dirección",
    "validacion2": "",
    "imag": "C:\\fakepath\\Captura de pantalla (1).png",
    "telf": "0939494716",
    "email": "yuichiro@gmail.com",
    "validacion3": "",
    "validacion1": "revisado"
    };
    service.sendEmailerA(person).then((res : any) => {
      
    expect(res).toEqual(resObj);
    }).catch((error) => {
    console.log(error);
    })


    const req = httpMock.expectOne(API_URL+'/send-emailA');
    expect(req.request.method).toEqual('POST');
    req.flush(resObj);
    })
  })

 

});
