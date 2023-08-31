import { Component , ChangeDetectionStrategy , ChangeDetectorRef} from '@angular/core';

import { AuthService } from '../services/auth/auth.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],

  
})
export class NavigationComponent {

  username! : string ;
  name : string = 'hola que hace';
  
  constructor(public authSvc : AuthService,
    private router : Router,
 
    ) {
      authSvc.checkToken()

    }

  loadUser(){
    this.authSvc.username
    .subscribe((res)=>{ 
      this.username = res });

    
   

  }

  logout(): void{
    this.authSvc.logout();
    this.router.navigate(['/login']);
  }

  ngOnInit() : void{
    this.loadUser()
  }
}
