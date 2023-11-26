import { Component, OnInit } from '@angular/core';
import { StudentServiceService } from '../student-service.service';
import { Employee } from '../employee';
import { ActivatedRoute, Router } from '@angular/router';
import { error } from 'console';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrl: './update-employee.component.css'
})
export class UpdateEmployeeComponent implements OnInit {

// id!:number;
 employee:Employee =new Employee();

//   constructor(private studentService:StudentServiceService,
//     private route:ActivatedRoute){}





//   ngOnInit(): void {
// this.id =this.route.snapshot.params['id'];
//     this.studentService.getEmployeeId(this.id).subscribe( data =>{
//       console.log(data);
//         this.employee = data;
//       }, error => console.log(error));
    
// }

id: number =0;
//employee: any; // Replace 'any' with the actual type of your employee data

constructor(private studentService: StudentServiceService, private route: ActivatedRoute,
  private router:Router) {}

ngOnInit(): void {
  this.id = this.route.snapshot.params['id'];
  this.studentService.getEmployeeId(this.id ,).subscribe(data => {
   console.log(data)
    this.employee1 = data;
  }, error => console.log(error));
}



  onSubmit() {
    this.studentService.updateEmployee(this.id,this.employee).subscribe(data => {
this.goToEmployeeList();
    },error => console.log(error));

    console.log(this.employee);
this.employee = { ...this.employee, ...this.employee1 }; 
this.saveEmployee();
  }
saveEmployee(){
    this.studentService.updateEmployee(this.id,this.employee).subscribe(data =>{
    console.log(data);
    this.goToEmployeeList();
    },
    error => console.log(error)) ;
   }

  goToEmployeeList(){
    this.router.navigate(['/student']);
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
