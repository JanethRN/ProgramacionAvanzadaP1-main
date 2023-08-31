import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { Table1Component } from '../tables/table1/table1.component';
import { Table2Component } from '../tables/table2/table2.component';
import { Table3Component } from '../tables/table3/table3.component';
import { FormComponentComponent } from '../form-component/form-component.component';
import { ValidateDocumentComponent } from '../validate-document/validate-document.component';
import { NavigationComponent } from '../navigation/navigation.component';
import { checkLoginGuard } from '../guards/check-login/check-login.guard';
import { SuccessComponent } from '../success/success.component';

const routes: Routes = [
  { path: '' , redirectTo: '/login', pathMatch: 'full' },
  { path : 'login' , component  : LoginComponent },
  { path : 'formulario' , component  : FormComponentComponent },
  { path : 'success' , component  : SuccessComponent },
  {
    path: 'insideapp',  component  :  NavigationComponent, canActivate : [checkLoginGuard],
    children: [
      { path : 'formulario' , component  : FormComponentComponent },
      { path : 'success' , component  : SuccessComponent },
     
      { path : 'table1', component  : Table1Component},
      { path : 'table2', component  : Table2Component},
      { path : 'table3', component  : Table3Component}
    ]
  },
  {
    path : 'validateform/:id' , component  : ValidateDocumentComponent 
  },
  {
    path:'**', redirectTo : '/login', pathMatch : 'full'
  }

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
