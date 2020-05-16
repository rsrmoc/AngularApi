import { RequestCreate, RequestUpdate, RequestUser } from './../user.model';
import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  id :string; 

  request: RequestUser;

  constructor( private userService: UserService, private route: ActivatedRoute) { }

  // ngOnInit(): void {
  //   this.id = this.route.snapshot.paramMap.get('id');
  //   this.userService.getUser(this.id).subscribe( res => {
  //     this.request = { 
  //       nm_usuario: `${res.nm_usuario }`,
  //       nome: `${res.nome }`,
  //       avatar: `${res.avatar }`
        
  //     }
  //   });
  // }


  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.userService.getUser(this.id).subscribe((request) => {
      this.request = request;
      // this.request = { 
      //   nm_usuario: `${res.nm_usuario }`,
      //   nome: `${res.nome }`,
      //   avatar: `${res.avatar }`
        
      });
    }

  // update(){
  //   this.userService.updateUser(this.id, this.request).subscribe(res => {
  //     alert(this.id);
      
  //   });
  // }

  update(){
    this.userService.updateUser(this.id, this.request).subscribe(res => {
      alert(this.id);
      
    });
  }

}
