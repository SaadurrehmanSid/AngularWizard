import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UserService } from '../services/users.service';
import { IUser } from '../users';

@Component({
  selector: 'app-userslist',
  templateUrl: './userslist.component.html',
  styleUrls: ['./userslist.component.css']
})
export class UserslistComponent implements OnInit {

    

 
  UsersData:IUser[];
  filteredUsersData:IUser[];
  dtOptions: DataTables.Settings = {};
  topRatedUsers : IUser[];

  
  private _userFilter = '';


  
  constructor(private _formBuilder: FormBuilder, private http: HttpClient,private userService:UserService) {}
  
  ngOnInit() {
    

    this.http.get<any>('https://reqres.in/api/users/').subscribe(data => {
             this.UsersData = data.data;
             this.filteredUsersData = data.data;
          
            });

            this.dtOptions = {
              pagingType: 'full_numbers',
              pageLength: 5,
            lengthMenu:[5,10,15],
              searching:false,
             
            };

                  this.topRatedUsers = this.userService.getTopUsers();
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
  


  onUserInputstring(userInput: string)
  {
    this.filteredUsersData =
    this.filterData(userInput);
  }

}
