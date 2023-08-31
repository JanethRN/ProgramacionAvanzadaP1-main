import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { map, take, tap } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth/auth.service';



export const checkLoginGuard = () => {
  const authSvc = inject(AuthService);
  const router  = inject(Router);   
  return authSvc.isLogged.subscribe(
    ((isLogged : boolean) => 
    (!isLogged)?  router.navigate(['/login']) : true));
  
};
