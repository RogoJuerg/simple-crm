import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']

})
export class DashboardComponent implements OnInit {

  readonly ROOT_URL = 'https://type.fit/api/quotes';

  posts: any;

  constructor(private http: HttpClient) { }

  async loadApi() {
    let response = await fetch(this.ROOT_URL);
    let responseAsJson = await response.json();

    this.posts = responseAsJson;
    console.log(this.posts, this.getRandomInt());
  }

  getRandomInt() {
    return Math.floor(Math.random() * this.posts.length);
  }

  ngOnInit(): void {
  }

}
