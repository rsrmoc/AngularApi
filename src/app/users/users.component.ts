import { UserService } from './user.service';
import { Component, OnInit } from '@angular/core';
 
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  usuarios: Array<any>;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(res => this.usuarios = res)
  }

}
