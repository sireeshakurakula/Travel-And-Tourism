import { Component, OnInit, } from '@angular/core';
import { Employee } from '../employee';
import { StudentServiceService } from '../student-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})
export class StudentComponent implements OnInit {
  employees: Employee[] = []; // Initialize the array

  //constructor(private studentService: StudentServiceService) { }

  //  ngOnInit(): void {
  //   this.getEmployees();
  //  }

  //  private getEmployees() {
  //    this.studentService.getEmployeesList().subscribe((data: Employee[]) => {
  //      this.employees = data;
  //    });


  // }





  constructor(private studentService: StudentServiceService,
    private router: Router) { }
  ngOnInit(): void {
    this.getEmployees();


  }
  private getEmployees() {
    this.studentService.getEmployeesList().subscribe((data: Employee[]) => {
      this.employees = data;
    });
  }

  // updateEmployee(id: number) {
  //   this.router.navigate(['update-employee', id]);

  // }

  
  
  updateEmployee(id: number) {
    this.router.navigate(['update-employee', id]);
}

deleteEmployee(id: number) {
  this.studentService.deleteEmployee(id).subscribe(data =>{
   console.log(data);
    this.getEmployees();
  });
}
employeeDetailes(id:number){
  this.router.navigate(['employee-detailes', id]);
}


}