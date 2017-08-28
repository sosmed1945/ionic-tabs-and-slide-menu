import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';

import { MenuTabsKuPage } from '../pages/menu-tabs-ku/menu-tabs-ku';
import { Menu1Page } from '../pages/menu1/menu1';
import { Menu2Page } from '../pages/menu2/menu2';
import { Menu3Page } from '../pages/menu3/menu3';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    MenuTabsKuPage,
    Menu1Page,
    Menu2Page,
    Menu3Page
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MenuTabsKuPage,
    Menu1Page,
    Menu2Page,
    Menu3Page
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
