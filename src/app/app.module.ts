import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './hero/hero.component';
import { AngularFireModule} from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { MainComponent } from './main/main.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [

 {

   path: '', component: HomePageComponent

 },

 {

   path: 'about', component: AboutPageComponent

 },

];

export const config ={     
    apiKey: "AIzaSyB8KWZ20gDRNRQvXUy3zV2Cl9bzJL12sX4",
    authDomain: "codereview-60a7b.firebaseapp.com",
    databaseURL: "https://codereview-60a7b.firebaseio.com",
    projectId: "codereview-60a7b",
    storageBucket: "codereview-60a7b.appspot.com",
    messagingSenderId: "262745814838"
  };

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeaderComponent,
    HeroComponent,
    MainComponent,
    AboutPageComponent,
    NavbarComponent,
  ],
  imports: [
  RouterModule.forRoot(appRoutes) ,
    BrowserModule,
   AngularFireModule.initializeApp(config),
   AngularFireAuthModule,
   AngularFireDatabaseModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
