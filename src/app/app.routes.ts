import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { PipeDemoComponent } from './pipe-demo/pipe-demo.component';
import { UserComponent } from './user/user.component';
import { LoginGaurdService } from './service/login-guard.service';
import { ProductComponent } from './product/product.component';
import { DescriptionComponent } from './product/description/description.component';
import { SpecificationComponent } from './product/specification/specification.component';
import { EmployeeComponent } from './employee/employee/employee.component';


export const APP_ROUTES : Routes  =[{
    path : '',
    redirectTo : 'login',
    pathMatch : 'full'
},
{
    path : 'login',
    component : LoginComponent
},
{
    path : 'register',
    component : RegisterComponent
},
{
    path : 'pipe',
    component : PipeDemoComponent
},
{
    path : 'user',
    component : UserComponent,
    canActivate : [LoginGaurdService]
},
{
    path : 'product',
    component : ProductComponent,
    children : [{
        path : '',
        redirectTo : 'overview',
        pathMatch : 'full'
    },{
        path : 'description/:id',
        component : DescriptionComponent
    },{
        path : 'spec',
        component : SpecificationComponent
    }]
},{
    path : 'employee',
    component : EmployeeComponent
},
{
    path : 'lazy',
    loadChildren : 'app/lazy/lazy.module#LazyModule'
},
{
    path : '**',
    redirectTo : 'login',
    pathMatch : 'full'
}]