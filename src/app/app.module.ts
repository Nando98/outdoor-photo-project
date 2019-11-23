import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app.routes';

import {AppComponent} from './app.component';
import {HomeComponent} from './components/home/home.component';
import {ContactComponent} from './components/contact/contact.component';
import {NavbarComponent} from './shared/components/navbar/navbar.component';
import {FooterComponent} from './shared/components/footer/footer.component';
import {PortfolioComponent} from './components/portfolio/portfolio.component';
import {RouterModule} from '@angular/router';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        ContactComponent,
        NavbarComponent,
        FooterComponent,
        PortfolioComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        RouterModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
