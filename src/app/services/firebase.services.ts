import {Injectable} from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import 'rxjs/add/operator/map';
@Injectable()
export class FirebaseService{
  persons: FirebaseListObservable<persons[]>;
  category: FirebaseListObservable<Category[]>;
  constructor(private af: AngularFireDatabase) {
    
  }
  
getPersons(category: string = null) {
      if (category != null) {
          this.persons = this.af.list('/persons', {
              query: {
                  orderByChild: 'category',
                  equalTo: category
              }
          }) as FirebaseListObservable<persons[]>;
      } else {
          this.persons= this.af.list('/persons') as FirebaseListObservable<persons[]>;
      }
      return this.persons;
  }

 getcategory() {
      this.category= this.af.list('/category') as FirebaseListObservable<Category[]>;
      return this.category ;
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
}
export interface Category {
  $key?: string;
  name?: string;
}