import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';
import { AuthService } from '../services/auth/auth.service';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
/* import { DatabaseService } from '../database.service'; */

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  form! : FormGroup;


  constructor(
    public formBuilder  : FormBuilder,
    private authServ : AuthService,
    private router : Router
  ) { 
    
    this.buildForm();
    
  }

  private buildForm(){
    this.form = this.formBuilder.group({
      username  : new FormControl('', [Validators.required]),
      password  : new FormControl('',[Validators.required])
    })
  }




  submit(event : Event) {
    event.preventDefault();

    if(this.form.valid){
      
     
      this.authServ.login(this.form.value).then((res) => {
                if(res){
                  this.router.navigate(['/insideapp/table1']);
                }
              })
              .catch(error => console.log(error));
      
      
    }else{
      this.form.markAllAsTouched();
    }

    
  }

 /*  submit(event : Event) {
    event.preventDefault();

    if(this.form.valid){
      this.authServ.username.subscribe();
     
      this.authServ.login(this.form.value)
              .subscribe((res) => {
                if(res){
                  this.router.navigate(['/insideapp/table1']);
                }
              
              });
      
      
    }else{
      this.form.markAllAsTouched();
    }

    
  } */


}
