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

  goToPanoramicViewPage(bedRoomType:String) {
      this.nav.push(PanoramicView, {
            bedRoomType: bedRoomType
        });
  }

  goToVirtualRealityViewPage(bedRoomType:String) {
      this.nav.push(VirtualRealityView, {
            bedRoomType: bedRoomType
        });
  }

  goToContactPage() {
      this.nav.push(ContactPage);
  }
}
