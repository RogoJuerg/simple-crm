import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']

})

export class DashboardComponent implements OnInit {

  readonly ROOT_URL = 'https://type.fit/api/quotes';

  posts: any;

  allEvents: Array<any> = [];
  sortedEvents: Array<any> = [];
  dueTo: any = '';

  randomQuote: any = {text: 'Motivational quote here', author: '!'};

  constructor(private http: HttpClient, public dialog: MatDialog, private firestore: AngularFirestore) { }

  async loadApi() {
    let response = await fetch(this.ROOT_URL);
    let responseAsJson = await response.json();

    this.posts = responseAsJson;
  }

  getRandomInt() {
    return Math.floor(Math.random() * this.posts.length);
  }

  chooseRandomQuote() {
    this.randomQuote = this.posts[this.getRandomInt()];    
  }

  ngOnInit(): void {
    this.firestore
      .collection('events')
      .valueChanges({ idField: 'customIdName' })
      .subscribe((changes: any) => {
        this.allEvents = changes;
        this.sortEventsByDate();
      });
      this.loadApi();
  }

  showDate(i: number) {
    let milliSeconds = this.allEvents[i].dueTo;
    let date = new Date(milliSeconds);
    this.dueTo = date.toLocaleDateString();
    return this.dueTo;
  }

  customSort = (a: any, b: any) => {
    return a.dueTo - b.dueTo;
  }

  sortEventsByDate() {
    this.allEvents.sort(this.customSort);
  }

}
