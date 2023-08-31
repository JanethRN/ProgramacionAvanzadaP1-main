import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FormService } from '../services/form/form.service';

import { from } from 'rxjs';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-validate-document',
  templateUrl: './validate-document.component.html',
  styleUrls: ['./validate-document.component.css']
})
export class ValidateDocumentComponent implements OnInit {

  imageValid: boolean = false;
  form!: FormGroup;

  /* public formsInRevisionTwo: any; */
  persona: any;

  constructor(private http: HttpClient, private formBuilder: FormBuilder, 
    private formService: FormService, private router: Router,
    private route : ActivatedRoute
    ) {
    this.buildForm();
  }

  ngOnInit(){

    let id = this.route.snapshot.params['id'];
  this.getEnRevisionPorId(id)
  }

  async getEnRevisionPorId(id : string){
    await this.formService.getEnRevisionPorId(id).then((data : any) => {
      this.persona = data;
      console.log(this.persona);
    }).catch((error) => {
      console.log(error);
    })
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      imagVerification: new FormControl('', [Validators.required])
    });
  }

  // Subir segunda imagen de validacion ->segunda validación
  async guardarSegundaImagen(persona: any) {
    try {
      
     const resp =  await this.formService.uploadImage(persona, this.form.value.imagVerification);
     await this.formService.secondValidate(persona, 'revisado')
     console.log(resp)
      this.router.navigate(['insideapp/table2']);
    } catch (error: any) {
      console.log(error.message);
    }
  }


  


  //Previsualizacion img
  previewImage: any;

  handleFileInput(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e: any) => {
      this.previewImage = e.target.result;
      this.imageValid = true;
    };
    reader.readAsDataURL(file);
  }

  get textoLargo() {
    return this.form.get('location');
  }
}
