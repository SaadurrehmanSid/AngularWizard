import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { data } from 'jquery';
import { Observable ,Subscription} from 'rxjs';
import { UserService } from '../services/users.service';
import { userFilterService } from '../shared/userFilter.service';
import { IUser } from '../users';
import { faEdit, faInfo, faInfoCircle, faTrash } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-userslist',
  templateUrl: './userslist.component.html',
  styleUrls: ['./userslist.component.css']
})
export class UserslistComponent implements OnInit {

    editIcon = faEdit;
    detailIcon = faInfoCircle;
    deleteIcon = faTrash
 
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

  deleteUser()
  {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      confirmButtonColor:'#007b5e',
      showCancelButton: true,
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          icon:'success',
           title:'Success',
          confirmButtonColor:'#007b5e',
          text:'User has been deleted successfully',
          
        
      }
         
      )
      }
    })
  }

}
