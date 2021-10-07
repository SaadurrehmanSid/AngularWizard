import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { data, map } from 'jquery';
import { Observable, Subscription } from 'rxjs';
import { StockCategory, User } from '../app.component';
import { UserService } from '../services/users.service';
import Swal from 'sweetalert2';
import { IUser } from '../users';
import { animate, state, style, transition, trigger } from '@angular/animations';

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
 fadeTrigger = 'hidden';

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

   

    this.firstFormGroup = this._formBuilder.group({
      first_name: ['', Validators.required,],
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

 stepperDone() {
  console.log('stepper is done now');
  this.fadeTrigger = 'visible';
}


  fadeAnimation() {
  return trigger('fadeAnimation', [
    state('hidden', style({ opacity: 0 })),
    state('visible', style({ opacity: 1 })),

    transition('* => visible', [
      animate('4s ease-in-out'),
    ]),
    transition('visible => *', [
      animate('4s ease-in-out')
    ])
  ]);
}


  submit(){
    console.log(this.firstFormGroup.value);
    console.log(this.secondFormGroup.value);
    this.http.post<User>('https://reqres.in/api/users/',{name:this.firstFormGroup.value.name,
                                                        job:this.secondFormGroup.value.stockItem}).subscribe({
      
      next: data => {
        this.createdUser = data;
        console.log(data);


        
       
        // Swal.fire(
        //   'SUCCESS!',
        //   'User has been created successfully.',
        //   'success'
          
          
        // )

        Swal.fire({
          icon:'success',
           title:'Success',
          confirmButtonColor:'#007b5e',
          text:'User has been created successfully',
          
        
      }
         
      )
        
    },
    error: error => {
        var error = error.message;
        console.error('There was an error!', error);
        alert("Failed");
    }
  
     
});
}

}
