import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StockCategory, User } from '../app.component';
import { UserService } from '../services/users.service';

@Component({
 
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup : FormGroup;
  createdUser : User;
  isLinear = true;
  title = 'newMat';
 

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
  
  constructor(private _formBuilder: FormBuilder, private http: HttpClient,private userService:UserService) { }

  ngOnInit(): void {
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
