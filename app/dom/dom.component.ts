import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dom',
  templateUrl: './dom.component.html',
  styleUrls: ['./dom.component.css']
})
export class DOMComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  employee1:any[]=["Sudhir","Kanchan Shingote","Virat Shingote","Medhansh"];
}
