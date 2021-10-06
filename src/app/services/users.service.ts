import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { data } from "jquery";
import { Observable } from "rxjs";
import { IUser } from "../users";


@Injectable(
    {
        providedIn:'root'
    }
)


export class UserService 
{
     constructor(private http:HttpClient){}
   getTopUsers():IUser[]
   {
       return [
           {
            id : 2,
            email: 'janet.weaver@reqres.in',
            first_name: 'Janet',
            last_name: 'Weaver',
            avatar: 'https://reqres.in/img/faces/2-image.jpg'
           },
           {
            id : 5,
            email: 'charles.morris@reqres.in',
            first_name: 'Charles',
            last_name: 'Morris',
            avatar: 'https://reqres.in/img/faces/5-image.jpg'
           },
           {
            id : 5,
            email: 'tracey.ramos@reqres.in',
            first_name: 'Tracey',
            last_name: 'Ramos',
            avatar: 'https://reqres.in/img/faces/6-image.jpg'
           }

       ]
   }

   getSingleUser(id:number):Observable<any>
   {   
      return  this.http.get(`https://reqres.in/api/users/${id}`);
   }
}
