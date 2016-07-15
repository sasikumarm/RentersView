import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {RoundMeURLService} from '../../services/roundMeURLService';

@Component({
    templateUrl: 'build/pages/panoramic/panoramicView.html',
    providers: [RoundMeURLService]
})
export class PanoramicView {
    bedroomType:string;
    
    constructor(private roundMeURLService: RoundMeURLService,private nav: NavController,navParams: NavParams ) {
      this.bedroomType = navParams.get("bedRoomType");
    }

    goToHomePage() {
       this.nav.pop();
    }

    getRoundMeUrlForPanoramicView(){
       return this.roundMeURLService.getRoundMeUrl(this.bedroomType,"PAN");
    }
}
