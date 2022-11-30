import { Component, ElementRef, OnDestroy, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../service/employee.service';
import { NotificationService } from '../../../shared/services/notification.service';
import { ConfirmationDialogService } from 'src/app/shared/component/confirmation-dialog/confirmation-dialog.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit  {

  searchText : string;
  id: number;
  name: string;
  email: string;
  mobile: string;
  gender: string;
  dob: Date;
  salary: number;
  possition: string;
  IsUpdate =false;
  Employeelist: Employee[]=[];
  page :number = 1;
  tableSize: number = 7;
  isSave  = 'save';
  count: number = 0;
  constructor(private employeeService : EmployeeService, 
              private nofiySevice : NotificationService, 
              private confirmationDialogService: ConfirmationDialogService,
              private router: Router
              ) { }

  ngOnInit(): void {
    this.Employeelist = this.employeeService.getEmployee();
    console.log(this.Employeelist);
  }
  
  onTableDataChange(event: any) {
    this.page = event;
    this.Employeelist;
  }
  onTableSizeChange(event: any) {
    this.tableSize = event.target.value;
    this.page=1;
    this.Employeelist;
  }
 
  remove(id: number) {
    this.confirmationDialogService.confirm('Please confirm..', 'Do you really want to delete this employee ?')
    .then((confirmed) => 
    {
      if (confirmed == true) {
        this.employeeService.removeEmployee(id);
        this.Employeelist = this.employeeService.getEmployee();
        console.log(this.Employeelist);
        this.nofiySevice.showError('user ID ' + id , 'has remove' );
      } else {
        return;
      }
    }
    )
    .catch(() => console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));
    
  }
  successToase() {
    this.nofiySevice.showSuccess(this.id , "has been save");
  }
  save() {
    const data = {
      id: this.id,
      name:this.name,
      email: this.email,
      mobile: this.mobile,
      gender: this.gender,
      dob: this.dob,
      salary: this.salary,
      possition: this.possition
    }
    this.confirmationDialogService.confirm('Please confirm..', 'Do you really want to save this employee ?')
    .then((confirmed) => 
    {
      if (confirmed == true) {
        if (this.IsUpdate == false) {
          this.employeeService.addEmployee(data);
          this.successToase();
          console.log(this.Employeelist);
        } else {
          this.update();
          this.IsUpdate=false;
        }
        this.clear();
      } else {
        return;
      }
    }
    )
    .catch(() => console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));
  }
    
  empDetail(id ) {
    var empInfo = this.employeeService.getEmployeeByID(id);
    this.id = empInfo.id;
    this.name = empInfo.name;
    this.email = empInfo.email;
    this.mobile = empInfo.mobile;
    this.dob = empInfo.dob;
    this.salary = empInfo.salary;
    this.possition = empInfo.possition;
    this.IsUpdate = true
    console.log(this.IsUpdate);
  }
  detailEmp (id) {
    var empInfo = this.employeeService.getEmployeeByID(id);
   // this.router.navigate(['employee'], {queryParams: {id:empInfo.id}});
   this.router.navigate(['employee/detail'], {queryParams:{empInfo: {empInfo : JSON.stringify(empInfo)}}})
  //  console.log('asf',empInfo);
  }
  clear() {
    this.id = null
    this.name='',
    this.email ='';
    this.mobile ='';
    this.dob = null;
    this.salary = null;
    this.possition = '';
  }
  update() {
    const data = {
      id: this.id,
      name:this.name,
      email: this.email,
      mobile: this.mobile,
      gender: this.gender,
      dob: this.dob,
      salary: this.salary,
      possition: this.possition
    }
    this.employeeService.updateEmployee(data);
    this.clear();
    console.log(this.Employeelist);
    
  }
  goToPage(pageName:string):void{
    this.router.navigateByUrl(`/${pageName}`);
  }

  // openConfirmation() {
  //   this.confirmationDialogService.confirm('Please confirm..', 'Do you really want to ... ?')
  //   .then((confirmed) => 
  //   {
  //     if (confirmed == true) {
  //     }
  //   }
  //   )
  //   .catch(() => console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));
  // }
}
