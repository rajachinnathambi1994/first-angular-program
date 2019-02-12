import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  users: Object;
  
  // h1Style: boolean = false;
  constructor(private data:DataService) { }
  firstClick(){
    console.log("button clicked");
    this.h1Style = true;
    this.data.data_Service_function();
  }
  ngOnInit() {
    this.data.getUsers().subscribe(data => {
        this.users = data
        console.log(this.users);
      }
    );
  }


  

}
