import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-add-event',
  templateUrl: './dialog-add-event.component.html',
  styleUrls: ['./dialog-add-event.component.scss']
})
export class DialogAddEventComponent implements OnInit {
  loading: boolean = false;
  event: any;

  constructor(private firestore: AngularFirestore, public dialogRef: MatDialogRef<DialogAddEventComponent>) { }

  ngOnInit(): void {
  }

  saveEvent() {

  }

}
