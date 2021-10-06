import { Component, OnInit, Output,EventEmitter, Input } from '@angular/core';
import { userFilterService } from '../shared/userFilter.service';
import { IUser } from "../users";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private userfilterService:userFilterService) { }


@Output() userInputstring : EventEmitter<string> = new EventEmitter<string>();

@Input() private _filterUser:string;

// get filterUser()
// {
//   return this.userfilterService.filteredUsersData;
// }

set filterUser(userInput: string)
{
  this._filterUser = userInput.toLocaleLowerCase();
  this.userfilterService.filterdata;
  this.userfilterService.updateUsers(this._filterUser);
  
}

  ngOnInit(): void {
  }

}
