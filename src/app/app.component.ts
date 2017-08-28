import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { Menu1Page } from '../pages/menu1/menu1';
import { Menu2Page } from '../pages/menu2/menu2';
import { Menu3Page } from '../pages/menu3/menu3';

import { MenuTabsKuPage } from '../pages/menu-tabs-ku/menu-tabs-ku';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  @ViewChild('myTabs') tabRef: MenuTabsKuPage;

  rootPage: any = MenuTabsKuPage;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();
  }
  keMenu1() {
    this.nav.push(Menu1Page);
  }
  keMenu2() {
    this.nav.push(Menu2Page);
  }
  keMenu3() {
    this.nav.push(Menu3Page);
  }
  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

}
