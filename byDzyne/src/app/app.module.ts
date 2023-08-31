import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './routes/app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { LoginComponent } from './login/login.component';
import { Table1Component } from './tables/table1/table1.component';
import { Table2Component } from './tables/table2/table2.component';
import { Table3Component } from './tables/table3/table3.component';
import { LayouttableComponent } from './layouttable/layouttable.component';

import { FormComponentComponent } from './form-component/form-component.component';
import { RecaptchaModule } from 'ng-recaptcha';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ValidateDocumentComponent } from './validate-document/validate-document.component';
import { SuccessComponent } from './success/success.component';
import { JWT_OPTIONS, JwtHelperService } from '@auth0/angular-jwt';
import { TokenInterceptorService } from './services/token-interceptor/token-interceptor.service';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    DashboardComponent,
    LoginComponent,
    Table1Component,
    Table2Component,
    Table3Component,
    FormComponentComponent,
    LayouttableComponent,
    ValidateDocumentComponent,
    SuccessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatDividerModule,
    RecaptchaModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide : JWT_OPTIONS, useValue: JWT_OPTIONS
    },JwtHelperService,
    {
      provide : HTTP_INTERCEPTORS, useClass: TokenInterceptorService, multi : true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
