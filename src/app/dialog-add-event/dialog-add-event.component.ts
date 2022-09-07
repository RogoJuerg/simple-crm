import { Component, Input, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FormControl } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { firstValueFrom } from 'rxjs';
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
  sceduleTimes: Array<string> = ['9:00', '9:30', '10:00', '10:30', '11:00', '11:30', '12:00', '12:30', '13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30'];



  users = new FormControl('');

  constructor(private firestore: AngularFirestore, public dialogRef: MatDialogRef<DialogAddEventComponent>) { }

  ngOnInit(): void {
    this.firestore
      .collection('users')
      .valueChanges({ idField: 'customIdName' })
      .subscribe((changes: any) => {
        this.allUsers = changes;
        console.log(this.allUsers);
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
