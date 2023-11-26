import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { StudentServiceService } from '../student-service.service';

import { Router } from '@angular/router';


@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrl: './create-employee.component.css'
})
export class CreateEmployeeComponent implements OnInit {

 employee:Employee =new Employee();
constructor(private studentService:StudentServiceService, private router:Router) {
  //this.employee = {};
    
}
  ngOnInit(): void {
    
  }
 

 saveEmployee(){
    this.studentService.createEmployee(this.employee).subscribe(data =>{
    console.log(data);
    this.goToEmployeeList();
    },
    error => console.log(error)) ;
   }
   goToEmployeeList(){
       this.router.navigate(['/student']);
   }

onSubmit(){
console.log(this.employee);
this.employee = { ...this.employee, ...this.employee1 }; 
this.saveEmployee();
}
employee1: 
{
  firstname: string;
  lastname: string;
  email: string;
  contact: string;
  password: string;
  gender: string;
} = {
  firstname: '',
  lastname: '',
  email: '',
  contact: '',
  password: '',
  gender: ''
};








}
