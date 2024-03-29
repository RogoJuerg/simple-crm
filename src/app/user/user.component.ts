import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialog } from '@angular/material/dialog';
import { User } from 'src/models/user.class';
import { __values } from 'tslib';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  user: User = new User();
  allUsers: Array<any> = [];
  loading: boolean = true;

  public inputValue = '';

  constructor(public dialog: MatDialog, private firestore: AngularFirestore) {


  }

  ngOnInit(): void {
    this.firestore
      .collection('users')
      .valueChanges({ idField: 'customIdName' })
      .subscribe((changes: any) => {
        this.allUsers = changes;
        this.allUsers.sort((a, b) => a.firstname - b.firstname)
      });
  }

  openDialog() {
    this.dialog.open(DialogAddUserComponent);
  }
}
