import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-card',
  imports: [],
  templateUrl: './menu-card.component.html',
  styleUrl: './menu-card.component.css'
})
export class MenuCardComponent implements OnInit {

  @Input()
  photoCover:string =""
  @Input()
  cardTitle:string= ""
  @Input()
  cardDescription:string =""
  @Input()
  Id:string="0"


  constructor() { }

  ngOnInit(): void {
  }

}
