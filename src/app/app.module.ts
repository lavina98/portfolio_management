import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database-deprecated';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { FirebaseService } from './services/firebase.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { PortfolioComponent } from './Components/portfolio/portfolio.component';
import { TransactionsComponent } from './Components/transactions/transactions.component';
import { AddPortfolioComponent } from './Components/add-portfolio/add-portfolio.component';
import { EditPortfolioComponent } from './Components/edit-portfolio/edit-portfolio.component';
import { EditTransactionComponent } from './Components/edit-transaction/edit-transaction.component';
import { AddTransactionComponent } from './Components/add-transaction/add-transaction.component';

export const firebaseConfig = {
  apiKey: "AIzaSyBW9RnZaxkCDPur1GnGfkdzPrGE1-g63n4",
  authDomain: "portfolio-mangement.firebaseapp.com",
  databaseURL: "https://portfolio-mangement.firebaseio.com",
  projectId: "portfolio-mangement",
  storageBucket: "portfolio-mangement.appspot.com",
  messagingSenderId: "606390556269"
}

const appRoutes: Routes = [
  {path:'',component:HomeComponent},
  {path:'portfolio',component:PortfolioComponent},
  {path:'transaction',component:TransactionsComponent}
]

@NgModule({
  declarations: [ 
    AppComponent,
    HomeComponent,
    NavbarComponent,
    PortfolioComponent,
    TransactionsComponent, 
    AddPortfolioComponent, 
    EditPortfolioComponent, 
    EditTransactionComponent,
    AddTransactionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
