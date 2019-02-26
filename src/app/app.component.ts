import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tarefas';

  upperText:string = 'Testando upper case';
  lowerText:string = 'Testando lower case';
  percentValue:number = 0.5;
  date:Date = new Date();
  moeda:number = 598;
  user:User = {
    nome: 'Bob',
    age: 25
  }

  isAdmin:boolean = true;
  profile:number = 3;
}
