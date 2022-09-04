import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ActivatedRoute } from '@angular/router';
import { Event } from 'src/models/event.class';
import { User } from 'src/models/user.class';
import { LoadingService } from '../loading.service';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.scss']
})
export class EventDetailComponent implements OnInit {
  eventId: any;
  user: User = new User;
  event: Event = new Event();
  allUsers: Array<any> = [];
  allEvents: any = '';
  dueTo: any = '';

  constructor(private firestore: AngularFirestore, public load: LoadingService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(paramMap => {
      this.eventId = paramMap.get('id');
      console.log('GOT ID', this.eventId);
      this.getUser();
    });
  }

  getUser() {
    this.load.loadingScreen = true;
    this.firestore
      .collection('events')
      .doc(this.eventId)
      .valueChanges()
      .subscribe((eventSub: any) => {
        this.event = new Event(eventSub);
        console.log(this.event);
        this.allEvents = this.event;
      });
    this.load.loadingScreen = false;
  }

  deleteEvent() {
    this.load.loadingScreen = true;
    setInterval(() => {
      this.load.loadingScreen = false;
    }, 2000)
  }

  editEventDetail() {

  }

  editMenu() {

  }

}
