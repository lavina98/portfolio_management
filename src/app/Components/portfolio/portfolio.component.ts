import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  stocks:any;
  constructor(private firebaseService:FirebaseService) { }

  ngOnInit() {
      this.firebaseService.getListings().valueChanges().subscribe(stocks =>{
      console.log(stocks);
      this.stocks = stocks;
    });
  }

}
