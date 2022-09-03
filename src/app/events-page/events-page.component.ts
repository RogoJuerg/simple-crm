import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialog } from '@angular/material/dialog';
import { User } from 'src/models/user.class';
import { DialogAddEventComponent } from '../dialog-add-event/dialog-add-event.component';

@Component({
  selector: 'app-events-page',
  templateUrl: './events-page.component.html',
  styleUrls: ['./events-page.component.scss']
})
export class EventsPageComponent implements OnInit {
  user: User = new User;
  allEvents: Array<any> = [];
  dueTo: any = '';

  constructor(public dialog: MatDialog, private firestore: AngularFirestore) {
  }

  ngOnInit(): void {
    this.firestore
      .collection('events')
      .valueChanges({ idField: 'customIdName' })
      .subscribe((changes: any) => {
        this.allEvents = changes;
      });
  }

  openDialog() {
    this.dialog.open(DialogAddEventComponent);
  }

  showDate(i: number) {
    let milliSeconds = this.allEvents[i].dueTo;
    let date = new Date(milliSeconds);
    this.dueTo = date.toLocaleDateString();
    return this.dueTo;
  }

}
