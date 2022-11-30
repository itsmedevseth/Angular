import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }
  id: string;
  obj: any
  ngOnInit(): void {
    //this.id = this.route.snapshot.paramMap.get('id');
    // this.route.queryParamMap.subscribe((params: any) => {
    //   this.obj = params;
    //   console.log('dfsgsd', this.obj);
      
    // });
    // this.obj = JSON.parse(this.route.snapshot.paramMap.get('empInfo'))
    // console.log(this.obj);
    // this.route.queryParams.subscribe(params => {
    //   this.obj = params ["empInfo"];
    //   console.log(this.obj);
      
    //})
    this.route.queryParams 
              .subscribe(params => {
                console.log(params);
                
              })
    
  }

}
