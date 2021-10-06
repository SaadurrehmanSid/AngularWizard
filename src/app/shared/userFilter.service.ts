import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import {Observable, Subscription, throwError} from 'rxjs';
import { NgModule, Component, Injectable,OnInit, Output } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { ReactiveFormsModule, FormControl, FormsModule } from "@angular/forms";



import {
  map,
  debounceTime,
  distinctUntilChanged,
  switchMap,
  tap,
  catchError
} from "rxjs/operators";

import { IUser } from "../users";

@Injectable({
    providedIn:'root'
})

export class userFilterService 
{
    public usersList:IUser[];
    private filteredUsersData:IUser[];
    private productUrl = 'api/users.json';
    constructor(private http:HttpClient) {

    }

    getUsers(): Observable<IUser[]>{

        return this.http.get<IUser[]>(this.productUrl).pipe(
            tap(data => console.log('All: ', JSON.stringify(data))),
            catchError(this.handleError)
          );

    }
    private handleError(err: HttpErrorResponse): Observable<never> {
   
        let errorMessage = '';
        if (err.error instanceof ErrorEvent) {
          errorMessage = `An error occurred: ${err.error.message}`;
        } else {
          errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
        }
        console.error(errorMessage);
        return throwError(errorMessage);
      }
    


    filterdata():Observable<any>
    {
     return this.http.get('https://reqres.in/api/users/');
    }

  
 

    updateUsers(filterBy:string)
    {

       this.filteredUsersData = this.filterData(filterBy.toLocaleLowerCase());
    }
     
    filterData(value:string) 
    {
      if(value == '' || value == ' ')
      {
        this.filteredUsersData = this.usersList;
      }
      value = value.toLocaleLowerCase();
      console.log(value);
      console.log(this.filteredUsersData);
     
        return this.filteredUsersData.filter(user=>
         user.first_name.toLocaleLowerCase().indexOf( value) !== -1,
        );
        
    }
    

}