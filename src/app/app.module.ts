import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';

import {HighLightDirective} from './directives/highlight.directive';
import { UnlessDirective } from './directives/unless.directive';
import { PipeDemoComponent } from './pipe-demo/pipe-demo.component';

import { CountryCodePipe } from './pipe/countrycode.pipe';
import { FilterPipe } from './pipe/filter.pipe';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';

import {Dataservice} from './service/data.service';
import {HttpModule} from '@angular/http'; 
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'; 
import { AuthService } from './service/auth.service';

import { AuthInterceptorService } from './service/auth-interceptor.service';
import { LoggerInterceptorService } from './service/logger-interceptor.service';

import {RouterModule} from '@angular/router';
import { APP_ROUTES } from './app.routes';

import { LoginGaurdService } from './service/login-guard.service';
import { ProductComponent } from './product/product.component';
import { SpecificationComponent } from './product/specification/specification.component';
import { DescriptionComponent } from './product/description/description.component';
import { EmployeeModule } from './employee/employee.module';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    HighLightDirective,
    UnlessDirective,
    PipeDemoComponent,
    CountryCodePipe,
    FilterPipe,
    LoginComponent,
    RegisterComponent,
    ProductComponent,
    SpecificationComponent,
    DescriptionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot(APP_ROUTES),
    EmployeeModule
  ],
  providers: [Dataservice, AuthService, LoginGaurdService, {
    provide : HTTP_INTERCEPTORS,
    useClass : AuthInterceptorService,
    multi : true
  },{
    provide : HTTP_INTERCEPTORS,
    useClass : LoggerInterceptorService,
    multi : true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
