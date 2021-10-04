import { Injectable } from "@angular/core";
import { IUser } from "../users";


@Injectable(
    {
        providedIn:'root'
    }
)


export class UserService 
{
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
}
