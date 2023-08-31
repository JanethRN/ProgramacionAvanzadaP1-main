import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder, AbstractControl, ValidationErrors } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { debounceTime } from 'rxjs';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { API_URL } from '../services/API_URL';
@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.css']
})
export class FormComponentComponent implements OnInit {

  captchaValid: boolean = false;
  imageValid: boolean = false;

  form!: FormGroup;

  constructor(private http: HttpClient, private formBuilder: FormBuilder, private router: Router) {
    this.buildForm();
  }

  ngOnInit(): void { }

  private buildForm() {
    this.form = this.formBuilder.group({
      name: new FormControl('', [Validators.required, Validators.pattern(/^\S+\s\S+$/)]),
      lastname: new FormControl('', [Validators.required, Validators.pattern(/^\S+\s\S+$/)]),
      ci: new FormControl('', [Validators.required, this.validarCedula]),
      telf: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern('^[0-9]*$')]),
      email: new FormControl('', [Validators.required, Validators.email, Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)]),
      date: new FormControl('', [Validators.required, this.fechaNacimientoValidator]),
      country: new FormControl('', [Validators.required]),
      location: new FormControl('', [Validators.required]),
      gender: new FormControl('', [Validators.required]),
      imag: new FormControl('', [Validators.required])
    });
  }

  validarCedula(control: AbstractControl): ValidationErrors | null {
    const cedula = control.value as string;

    if (cedula.length !== 10) {
      return { cedulaInvalida: true, mensaje: 'La cédula debe tener 10 dígitos' };
    }

    // Verificar si todos los dígitos son iguales
    if (new Set(cedula).size === 1) {
      return { cedulaInvalida: true, mensaje: 'La cédula es inválida' };
    }

    // Verificar el código de la provincia
    const codigoProvincia = Number(cedula.slice(0, 2));
    if (codigoProvincia <= 0 || (codigoProvincia > 24 && codigoProvincia !== 30)) {
      return { cedulaInvalida: true, mensaje: 'La cédula es inválida' };
    }

    // Verificar el tercer dígito
    const tercerDigito = Number(cedula.charAt(2));
    if (tercerDigito > 5) {
      return { cedulaInvalida: true, mensaje: 'La cédula es inválida' };
    }

    const coeficientes = [2, 1, 2, 1, 2, 1, 2, 1, 2];
    const digitoVerificador = Number(cedula.charAt(9));

    let suma = 0;
    let resultado;

    for (let i = 0; i < coeficientes.length; i++) {
      let valor = Number(cedula.charAt(i)) * coeficientes[i];
      if (valor > 9) {
        valor -= 9;
      }
      suma += valor;
    }

    if (suma % 10 === 0) {
      resultado = 0;
    } else {
      resultado = 10 - (suma % 10);
    }

    if (resultado !== digitoVerificador) {
      return { cedulaInvalida: true, mensaje: 'La cédula es inválida' };
    }
    return null;
  }

  fechaNacimientoValidator(control: AbstractControl): ValidationErrors | null {
    const fechaNacimiento = new Date(control.value);
    const edadMinima = new Date();
    edadMinima.setFullYear(edadMinima.getFullYear() - 18);

    if (fechaNacimiento > edadMinima) {
      return { fechaNacimientoInvalida: true };
    }

    return null;
  }

  // Enviar datos
  save(event: Event) {
    event.preventDefault();
    if (this.form.valid) {
      const value = this.form.value;
      this.http.post(API_URL+'/customerOpenCount/formulario', value)
        .pipe(
          catchError((error) => {
            console.error('Error al guardar los datos del formulario', error);
            if (error.status === 400 && error.error.msg === 'La cedula ingresada ya se encuentra registrada') {
              this.form.get('ci')?.setErrors({ cedulaExistente: true });
            }
            if (error.status === 400 && error.error.msg === 'El correo ingresado ya se encuentra registrado') {
              this.form.get('email')?.setErrors({ correoExistente: true });
            }
            return throwError('Error al guardar los datos del formulario');
          })
        )
        .subscribe(
          response => {
            console.log('Datos del formulario guardados correctamente');
            // Realiza las acciones necesarias después de guardar los datos del formulario
            this.router.navigate(['success']);
          },
          error => {
            console.error(error);
            // Realiza el manejo de errores correspondiente
          }
        );

        this.sendEmail();
    } else {
      this.form.markAllAsTouched();
    }
  }

  //Validacion de captcha
  resolved(captchaResponse: string) {
    this.captchaValid = (captchaResponse && captchaResponse.length > 0) ? true : false;
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

  sendEmail() {
    if (this.form.valid && this.captchaValid && this.imageValid) {
      const formData = this.form.value; // Obtén los valores del formulario

      // Realiza una solicitud POST al servidor
      this.http.post('http://localhost:3000/send-email', formData)
        .subscribe(
          response => {
            console.log('Correo enviado con éxito:', response);
            // Aquí podrías mostrar un mensaje de éxito al usuario
          },
          error => {
            console.error('Error al enviar el correo:', error);
            // Aquí podrías mostrar un mensaje de error al usuario
          }
        );
    }
  }
}