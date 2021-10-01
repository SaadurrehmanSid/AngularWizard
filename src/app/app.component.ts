import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
interface StockCategory {
  value: string;
  viewValue: string;
} 
interface StockItems{
  value: string;
  viewValue: string;
} 

 export interface IUser
{
  id : number;
  email: string;
  first_name: string;
  last_name: string,
  avatar: string
}
interface User
{
  name:string;
  job : string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'newMat';
     
  isLinear = true;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup : FormGroup;
  createdUser : User;
  UsersData:IUser[];
  filteredUsersData:IUser[];

  
  private _userFilter = '';

  stockCategory: StockCategory[] = [
    {value: 'Clothes', viewValue: 'Clothes'},
    {value: 'Electrical', viewValue: 'Electrical'},
    {value: 'Computers', viewValue: 'Computers'}
  ];

  stockItems: StockCategory[] = [
    {value: 'Clothes', viewValue: 'Clothes'},
    {value: 'Electrical', viewValue: 'Electrical'},
    {value: 'Computers', viewValue: 'Computers'}
  ];
  
  constructor(private _formBuilder: FormBuilder, private http: HttpClient) {}
  
  ngOnInit() {
    
    this.firstFormGroup = this._formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      description: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      amount: ['', Validators.required],
      totalamount: ['', Validators.required],
      stock: ['', Validators.required],
      stockItem:['', Validators.required]
    });

    this.thirdFormGroup = this._formBuilder.group
    ({
      vendor:['',Validators.required],
      address:['',Validators.required]
    });

    this.http.get<any>('https://reqres.in/api/users/').subscribe(data => {
             this.UsersData = data.data;
             this.filteredUsersData = data.data;
          
  });


  }

  get filterUsers(): string {
    return this._userFilter;
  }

  set filterUsers(value:string) 
  {
  
    this._userFilter = value;
   this.filteredUsersData = this.filterData(value);
   console.log(this.filteredUsersData);
  }

  filterData(value: string) 
  {
    if(value == '' || value == ' ')
    {
      return this.UsersData;
    }
    value = value.toLocaleLowerCase();
    console.log(value);
    console.log(this.UsersData);
    console.log('filter method');
      return this.UsersData.filter(user=>
      
        user.first_name.toLocaleLowerCase().indexOf( value) !== -1
      );

  }
  
  submit(){
      console.log(this.firstFormGroup.value);
      console.log(this.secondFormGroup.value);
      this.http.post<User>('https://reqres.in/api/users/',{name:this.firstFormGroup.value.name,
                                                          job:this.secondFormGroup.value.stockItem}).subscribe({
        
        next: data => {
          this.createdUser = data;
          console.log(data);
          alert("user created successfully");
      },
      error: error => {
          var error = error.message;
          console.error('There was an error!', error);
          alert("Failed");
      }
    
       
});
  }
}