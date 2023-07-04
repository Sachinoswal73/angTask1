import { HttpHandler } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  constructor( public httpHndlr : HttpHandler ){

  }

  title = 'angTask1';
  
  ngOnInit(): void {
    
    // this.httpHndlr.postData().

  }  
  
}
