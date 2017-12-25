import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  group:string;
  groupmembers:string[];
  

  constructor() { }

  ngOnInit() {
    this.group = 'WhatsApp Group';
    this.groupmembers = ['Annette', 'Manu', 'Marco', 'Karsten', 'Michael'];
  }

}
