import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { data } from 'jquery';
import { Observable ,Subscription} from 'rxjs';
import { UserService } from '../services/users.service';
import { userFilterService } from '../shared/userFilter.service';
import { IUser } from '../users';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-userslist',
  templateUrl: './userslist.component.html',
  styleUrls: ['./userslist.component.css']
})
export class UserslistComponent implements OnInit {

    editIcon = faEdit;

 
  UsersData:IUser[];
  filteredUsersData: any = [];
  dtOptions: DataTables.Settings = {};
  topRatedUsers : IUser[];
  sub!: Subscription;

  

  
  private _userFilter = '';


  
  constructor(private http:HttpClient, private userService:UserService,private userFilterService: userFilterService,private router:Router) {
    

  }
  
  ngOnInit() {
    
    
            this.dtOptions = {
              pagingType: 'full_numbers',
              pageLength: 5,
            lengthMenu:[5,10,15],
              searching:false,
             
            };
          
            this.userFilterService.filterdata().subscribe(res =>
              {
                console.log(res.data);
                this.filteredUsersData = res.data;
              })
        

             this.topRatedUsers = this.userService.getTopUsers();
               
  }

  onClick(user :IUser)
  {
   var id = user.id;
      this.router.navigate(['/user-registration/',{id}]);
  }

  get filterUsers(): string {
    return this._userFilter;
  }

  set filterUsers(value:string) 
  {
  
    this._userFilter = value;

  }

}
