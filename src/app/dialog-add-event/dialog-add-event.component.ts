import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialogRef } from '@angular/material/dialog';
import { Event } from 'src/models/event.class';

@Component({
  selector: 'app-dialog-add-event',
  templateUrl: './dialog-add-event.component.html',
  styleUrls: ['./dialog-add-event.component.scss']
})
export class DialogAddEventComponent implements OnInit {
  loading: boolean = false;
  event: Event = new Event();
  allUsers: Array<any> = [];
  dueTo: Date = new Date;
  usersToAdd: string[] = [];

  constructor(private firestore: AngularFirestore, public dialogRef: MatDialogRef<DialogAddEventComponent>) { }

  ngOnInit(): void {
    this.firestore
      .collection('users')
      .valueChanges({ idField: 'customIdName' })
      .subscribe((changes: any) => {
        this.allUsers = changes;
      });
  }

  saveEvent() {
    this.event.dueTo = this.dueTo.getTime();
    this.loading = true;
    this.event.done = false;
    this.firestore
      .collection('events')
      .add(this.event.toJSON())
      .then((result: any) => {
        this.loading = false;
        this.dialogRef.close();
      });

  }

}
