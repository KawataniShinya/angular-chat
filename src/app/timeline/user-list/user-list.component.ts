import { Component, OnInit } from '@angular/core';
import { AngularFireList, AngularFireDatabase, SnapshotAction } from '@angular/fire/database';
import { User } from 'src/app/class/user';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as firebase from 'firebase';

@Component({
  selector: 'ac-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  usersRef: AngularFireList<firebase.User>;
  users$: Observable<User[]>;

  constructor(private db: AngularFireDatabase) {
    this.usersRef = db.list('/users');
  }

  ngOnInit(): void {
    this.users$ = this.usersRef.snapshotChanges().pipe(
      map((snapshots: SnapshotAction<firebase.User>[]) => {
        return snapshots.map(snapshot => {
          const values = snapshot.payload.val();
          return new User(values.uid, values.displayName);
        })
      })
    );
  }

}
