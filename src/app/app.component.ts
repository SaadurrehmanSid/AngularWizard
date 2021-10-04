import { AutofillMonitor } from '@angular/cdk/text-field';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { UserService } from './services/users.service';
import { IUser } from './users';
export interface StockCategory {
  value: string;
  viewValue: string;
} 
export interface StockItems{
  value: string;
  viewValue: string;
} 


export interface User
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
  
  private _userFilter = '';


  
  constructor(private _formBuilder: FormBuilder, private http: HttpClient,private userService:UserService) {}
  
  ngOnInit() {
  }


}