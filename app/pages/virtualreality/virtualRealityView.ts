import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {RoundMeURLService} from '../../services/roundMeURLService';
import {GoogleURLService} from '../../services/googleURLService';

@Component({
    templateUrl: 'build/pages/virtualreality/virtualRealityView.html',
    providers: [RoundMeURLService,GoogleURLService]
})
export class VirtualRealityView {

    bedroomType:string;
    viewBy:string;

    constructor(private roundMeURLService: RoundMeURLService,private googleURLService: GoogleURLService,private nav: NavController,navParams: NavParams ) {
      this.bedroomType = navParams.get("bedRoomType");
      this.viewBy =  navParams.get("viewBy");
    }

    goToHomePage() {
        this.nav.pop();
    }

    getUrlForVirtualRealityView(){
       let viewURL:string="";
       if(this.viewBy =="RoundMe") {
           viewURL =  this.roundMeURLService.getRoundMeUrlForVirtualRealityView(this.bedroomType);
       }else if(this.viewBy =="Google") {
           viewURL = this.googleURLService.getGoogleUrlForVirtualRealityView(this.bedroomType);
       }
       return viewURL;
    }
}
