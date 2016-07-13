import {Component} from "@angular/core";
import {NavController} from 'ionic-angular';
import {PanoramicView} from '../panoramic/panoramicView';
import {VirtualRealityView} from '../virtualreality/virtualRealityView';
import {ContactPage} from '../contact/contact';

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {

  constructor(private nav: NavController) {
  }

  goToPanoramicViewPage() {
    this.nav.push(PanoramicView);
  }

  goToVirtualRealityViewPage() {
    this.nav.push(VirtualRealityView);
  }

  goToContactPage() {
    this.nav.push(ContactPage);
  }
}