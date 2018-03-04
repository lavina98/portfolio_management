import { Injectable } from '@angular/core';
import { FirebaseListObservable} from 'angularfire2/database-deprecated';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireList } from 'angularfire2/database/interfaces';
import { Router } from '@angular/router';

@Injectable()
export class FirebaseService {

  stocks: AngularFireList<any[]>;
  constructor(private db:AngularFireDatabase) {
  }

  getListings(){
    this.stocks=this.db.list('/Portfolio') as AngularFireList<Listing[]>
    return this.stocks;    
  }

}

interface Listing{
  $key?:String;
  EmailID?:String;
  Stocks?:Number;
  Networth?:Number;
  Date?:String;
}
