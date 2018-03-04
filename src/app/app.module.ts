import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AccessComponent } from './access/access.component';
import { LoginComponent } from './access/login/login.component';
import { SignupComponent } from './access/signup/signup.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { AlertwindowComponent } from './alertwindow/alertwindow.component';
import { StocksComponent } from './stocks/stocks.component';
import { UserComponent } from './user/user.component';
import { PortfolioComponent } from './user/portfolio/portfolio.component';
import { InvestmentComponent } from './user/investment/investment.component';
import { TransactionComponent } from './user/transaction/transaction.component';
import { StockitemComponent } from './stocks/stockitem/stockitem.component';


@NgModule({
  declarations: [
    AppComponent,
    AccessComponent,
    LoginComponent,
    SignupComponent,
    NavbarComponent,
    FooterComponent,
    AlertwindowComponent,
    StocksComponent,
    UserComponent,
    PortfolioComponent,
    InvestmentComponent,
    TransactionComponent,
    StockitemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
