import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { data } from 'jquery';
import { UserService } from '../services/users.service';
import { IUser } from '../users';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {

  constructor(private userService:UserService,private route:ActivatedRoute) { }
  userId:number = Number(this.route.snapshot.paramMap.get('id'));
  User:IUser;
  ngOnInit(): void {
      this.userService.getSingleUser(this.userId).subscribe(data=>this.User=data.data);
  }



}
