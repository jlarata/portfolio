import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  public user = 'admin';

  constructor() { }

  ngOnInit(): void {
  }

  volver(): void {
    window.history.back();
  }
}
