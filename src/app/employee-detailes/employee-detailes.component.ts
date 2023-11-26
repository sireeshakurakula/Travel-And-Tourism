import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { ActivatedRoute } from '@angular/router';
import { StudentServiceService } from '../student-service.service';

@Component({
  selector: 'app-employee-detailes',
  templateUrl: './employee-detailes.component.html',
  styleUrl: './employee-detailes.component.css'
})
export class EmployeeDetailesComponent implements OnInit {



  id:number=0;
  employee :any;
constructor(private route:ActivatedRoute, private studentService:StudentServiceService ){}
ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.employee =new Employee();
    this.studentService.getEmployeeId(this.id).subscribe(data =>{
      this.employee =data;
    })
}


}
