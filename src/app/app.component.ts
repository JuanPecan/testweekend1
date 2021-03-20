import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from './classes/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title: string = 'My First Week ';
  public user: User = new User(20, 'lol', 'sda');

  public users: User[] = [
    new User(23, 'lola', 'Smith'),
    new User(54, 'hector', 'Pator'),
    new User(78, 'Waren', 'Amlet')
  ];


  public tab:number[] = [1,2,3,4,5]

  public tab2:number[] = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]

  constructor(){


  }


  public helloWorld():string{
    return 'hello world from the function helloWorld()'
  }


  public name:string = "Robin";
  public color:string = 'red'
  


  // public displayBlue(): boolean {
  //   return this.color === "blue" ? true : false;
  // }

}
