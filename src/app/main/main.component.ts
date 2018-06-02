import { Component, OnInit } from '@angular/core';
import { AngularFireModule} from 'angularfire2';
import { AngularFireDatabaseModule} from 'angularfire2/database';
import { AngularFireDatabase,FirebaseListObservable} from 'angularfire2/database';
import { AngularFireAuth} from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import { FirebaseService } from '../services/firebase.services';

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  providers: [FirebaseService]
})
export class MainComponent implements OnInit {
	
	persons:persons[];
	category:Category[];
  appState: string;
  activeKey: string;



  constructor(private _firebaseService: FirebaseService) {
 
}

ngOnInit() {
  // this.activeKey='key';
	this.appState='default';
   this._firebaseService.getPersons().subscribe(persons => {

     this.persons = persons;

   });

   this._firebaseService.getcategory().subscribe(category => {

     this.category = category;


   });

}
	filterCategory(category) {
 	 this._firebaseService.getPersons(category).subscribe(category => {
   	 this.persons = category;
  });
}


changeState(state, key = null) {

   if(key) {

     this.activeKey = key;

   }

   this.appState = state;

 }
}

export interface persons {
	$key?: string;
	image?: string;
	name?: string;
	Surname?: string;
	heart?: string;
	likes?: number;
	Age?: number;
	category:string;
  relation?:string;
}

export interface Category {
  $key?: string;
  name?: string;
}
