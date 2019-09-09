import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularDemoApp My LocalApp';
  name = "Medhansh Shingote"
  chotu = "Virat Shingote"
  num:number[]=[1,2,3,4,5];
  employee:any[]=["Sudhir","KanchanShingote","Virat","Medhansh"];
}
