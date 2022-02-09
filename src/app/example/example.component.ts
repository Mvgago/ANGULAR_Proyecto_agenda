import { UserModel } from './../models/user.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss']
})
export class ExampleComponent implements OnInit {
  public userList: UserModel[] = [];
  public username:string = '';


  constructor() { }

  ngOnInit(): void {
    this.userList = [
      {
      name: 'Mario',
      isActive: true
      },
      {
        name: 'Jose',
        isActive: true
      },
      {
        name: 'Pedro',
        isActive: true
      }
    ];
  }

  addUser(item: string) {
    console.log('addUser', this.username);
    const user: UserModel = {
      name: this.username,
      isActive: false
    };
    this.userList.push(user);
  }

  activateUser(user: UserModel): void {
    user.isActive = true;

  }

    desactivateUser(user: UserModel): void {
    user.isActive = false;
  }

}