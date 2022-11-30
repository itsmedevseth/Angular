import { Injectable } from '@angular/core';
import { Employee } from '../employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private employeeList: Employee[] =[{
    id:11,
    name: 'piseth',
    dob: new Date('02/02/2001'),
    email: 'ankit@gmail.com',
    gender: 'Male',
    mobile: '8978786933',
    salary: 20,
    possition: 'Admin'
  },
  {
    "id": 1,
    "name": "Huntington",
    "dob": new Date('02/02/2001'),
    "email": "hculvey0@php.net",
    "gender": "Male",
    "mobile": "639-796-9710",
    "salary": 70,
    "possition": "Services"
  }, {
    "id": 2,
    "name": "Keven",
    "dob": new Date('02/02/2001'),
    "email": "kjustis1@deliciousdays.com",
    "gender": "Male",
    "mobile": "435-224-9304",
    "salary": 7,
    "possition": "Training"
  }, {
    "id": 3,
    "name": "Pam",
    "dob": new Date('02/02/2001'),
    "email": "ppoat2@furl.net",
    "gender": "Female",
    "mobile": "122-412-5660",
    "salary": 2,
    "possition": "Human Resources"
  }, {
    "id": 4,
    "name": "Sunny",
    "dob": new Date('02/02/2001'),
    "email": "scrossman3@slashdot.org",
    "gender": "Male",
    "mobile": "217-972-8382",
    "salary": 60,
    "possition": "Marketing"
  }, {
    "id": 5,
    "name": "Darrel",
    "dob": new Date('02/02/2001'),
    "email": "dfowler4@craigslist.org",
    "gender": "Male",
    "mobile": "913-198-5316",
    "salary": 36,
    "possition": "Accounting"
  }, {
    "id": 6,
    "name": "Lindsey",
    "dob": new Date('02/02/2001'),
    "email": "lbartoli5@vk.com",
    "gender": "Female",
    "mobile": "625-359-6346",
    "salary": 79,
    "possition": "Accounting"
  }, {
    "id": 7,
    "name": "Mendie",
    "dob": new Date('02/02/2001'),
    "email": "mminister6@epa.gov",
    "gender": "Male",
    "mobile": "694-873-4400",
    "salary": 29,
    "possition": "Marketing"
  }, {
    "id": 8,
    "name": "Doralyn",
    "dob": new Date('02/02/2001'),
    "email": "dcloonan7@state.gov",
    "gender": "Female",
    "mobile": "120-279-0788",
    "salary": 10,
    "possition": "Marketing"
  }, {
    "id": 9,
    "name": "Jayne",
    "dob": new Date('02/02/2001'),
    "email": "jbeelby8@imdb.com",
    "gender": "Female",
    "mobile": "513-878-5446",
    "salary": 95,
    "possition": "Sales"
  }, {
    "id": 10,
    "name": "Erik",
    "dob": new Date('02/02/2001'),
    "email": "ejaniak9@wikipedia.org",
    "gender": "Male",
    "mobile": "160-113-7688",
    "salary": 11,
    "possition": "Research and Development"
  }]
  constructor() { }
  getEmployee() {
    return this.employeeList;
  }
  addEmployee (employee: Employee) {
   
    this.employeeList.push(employee);
  }
  updateEmployee(employee: Employee) {
    const employeeIndex = this.employeeList.findIndex(x => x.id === employee.id);
    if(employeeIndex !=null && employeeIndex !=undefined) {
      this.employeeList[employeeIndex] = employee;
    }
  }
  removeEmployee(id: number) {
    this.employeeList = this.employeeList.filter(x => x.id !=id);
  }
  getEmployeeByID (id: number) {
    console.log(this.employeeList.find(x => x.id ==id));
    
    return this.employeeList.find(x => x.id ==id);
  }

}
