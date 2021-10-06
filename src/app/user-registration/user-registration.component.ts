import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { data, map } from 'jquery';
import { Observable, Subscription } from 'rxjs';
import { StockCategory, User } from '../app.component';
import { UserService } from '../services/users.service';
import { IUser } from '../users';

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
  singleUser :IUser;
 id:number;
 sub!:Subscription;

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
  
  constructor(private _formBuilder: FormBuilder, private http: HttpClient,private userService:UserService,private route:ActivatedRoute) { 
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.userService.getSingleUser(this.id).subscribe((res) => this.editForm(res));
    console.log(this.singleUser);
  
  }

  ngOnInit(): void {

    // if(this.singleUser != null)
    // {
    //   this.firstFormGroup = this._formBuilder.group({
    //     firstname: [this.singleUser.first_name, Validators.required] ,
    //     lastname: [this.singleUser.last_name, Validators.required],
    //     description: [this.singleUser.email, Validators.required]
    //   });
    // }else{
    //   this.firstFormGroup = this._formBuilder.group({
    //     firstname: ['', Validators.required],
    //     lastname: ['', Validators.required],
    //     description: ['', Validators.required]
    //   });

    // }

    this.firstFormGroup = this._formBuilder.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      email: ['', Validators.required],
      address: ['', Validators.required]
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



 editForm(user:any)
 {

  console.log(user.data.id,user.first_name,user.last_name,user.email)
  this.firstFormGroup.patchValue({
     
    first_name: [user.data.first_name] ,
    last_name: [user.data.last_name],
    email: [user.data.email]
     
    });
   console.log(user);
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
