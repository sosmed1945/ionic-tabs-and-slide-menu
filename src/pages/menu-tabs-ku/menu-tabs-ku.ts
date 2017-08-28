import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { Menu1Page } from '../../pages/menu1/menu1';
import { Menu2Page } from '../../pages/menu2/menu2';
import { Menu3Page } from '../../pages/menu3/menu3';

/**
 * Generated class for the MenuTabsKuPage tabs.
 *
 * See https://angular.io/docs/ts/latest/guide/dependency-injection.html for
 * more info on providers and Angular DI.
 */

@IonicPage()
@Component({
  selector: 'page-menu-tabs-ku',
  templateUrl: 'menu-tabs-ku.html'
})
export class MenuTabsKuPage {

  menu1Root = Menu1Page
  menu2Root = Menu2Page
  menu3Root = Menu3Page


  constructor(public navCtrl: NavController) { }

}
