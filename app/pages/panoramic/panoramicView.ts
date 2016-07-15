import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {RoundMeURLService} from '../../services/roundMeURLService';
import {GoogleURLService} from '../../services/googleURLService';

@Component({
    templateUrl: 'build/pages/panoramic/panoramicView.html',
    providers: [RoundMeURLService,GoogleURLService]
})
export class PanoramicView {
    bedroomType:string;
    viewBy:string;
    
    constructor(private roundMeURLService: RoundMeURLService,private googleURLService: GoogleURLService,private nav: NavController,navParams: NavParams ) {
      this.bedroomType = navParams.get("bedRoomType");
      this.viewBy =  navParams.get("viewBy");
      
    }

    goToHomePage() {
       this.nav.pop();
    }

    getUrlForPanoramicView(){
       let viewURL:string="";
       if(this.viewBy =="RoundMe") {
           viewURL =  this.roundMeURLService.getRoundMeUrlForPanoramicView(this.bedroomType);
       }else if(this.viewBy =="Google") {
           viewURL = this.googleURLService.getGoogleUrlForPanoramicView(this.bedroomType);
       }
       return viewURL;
    }
}
