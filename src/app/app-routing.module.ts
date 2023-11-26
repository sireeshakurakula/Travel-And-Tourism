import { NgModule, createComponent } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { EmployeeDetailesComponent } from './employee-detailes/employee-detailes.component';
import { TourismComponent } from './tourism/tourism.component';

const routes: Routes = [

   {path:"student", component:StudentComponent},
   { path: 'create-employee', component: CreateEmployeeComponent },
   { path: 'update-employee/:id', component: UpdateEmployeeComponent },
   {path:'employee-detailes/:id', component:EmployeeDetailesComponent},
   {path:'tourism' , component:TourismComponent}
//  {path:"",redirectTo:'student',pathMatch:'full'},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
