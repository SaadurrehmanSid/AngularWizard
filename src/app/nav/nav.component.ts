import { Component, OnInit, Output,EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor() { }


@Output() userInputstring : EventEmitter<string> = new EventEmitter<string>();

@Input() private _filterUser:string;

get filterUser()
{
  return this._filterUser;
}

set filterUser(userInput: string)
{
  this._filterUser = userInput;
  
  this.userInputstring.emit(this._filterUser);
  
}

  ngOnInit(): void {
  }

}
