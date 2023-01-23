import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ActivatedRoute, Router } from '@angular/router';
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

  constructor(private firestore: AngularFirestore, public load: LoadingService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(paramMap => {
      this.eventId = paramMap.get('id');
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
        this.allEvents = this.event;
        console.log(eventSub);

      });
    this.load.loadingScreen = false;
  }

  async deleteEvent() {
    this.load.loadingScreen = true;
    await this.firestore
      .collection('events')
      .doc(this.eventId)
      .delete();
    this.load.loadingScreen = false;
    this.navigateUserSection();
  }

  editEventDetail() {

  }

  navigateUserSection() {
    this.router.navigate(['/events']);
  }

  async changeStatus() {
    this.checkStatus();
    await this.firestore
      .collection('events')
      .doc(this.eventId)
      .update(this.event.toJSON())
      .then(() => {
      });
  }

  checkStatus() {
    if (this.event.status == 'progress') {
      this.event.status = 'soon';
    } else if (this.event.status == 'soon') {
      this.event.status = 'done'
    } else if (this.event.status == 'done') {
      this.event.status = 'progress'
    }
  }

}

