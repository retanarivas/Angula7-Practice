import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private http: HttpClient) { }

  list = {};
  ngOnInit() {
    this.http.get('/list/get').subscribe(
      res => console.log(res),
      error => console.error(error)
    );
    console.log('onInit work');
  }

  onDelete() {
    
  }

  onUpdate() {
    
  }

}
