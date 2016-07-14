import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';

@Injectable()
export class RoundMeURLService {
    constructor() {
    }

    getRoundMeUrl(bedroomType:String,mode:String){

       let roundMeURL:string;

       if(mode=="VR") {
            if( bedroomType == '1'){
                roundMeURL= "https://roundme.com/embed/39583/96541";
            }else if(bedroomType == '2'){
                roundMeURL= "https://roundme.com/embed/28534/68796";
            }else if(bedroomType == '3'){
                roundMeURL= "https://roundme.com/embed/31524/75796";
            }else{
                roundMeURL= "https://roundme.com/embed/48381/121294";
            }

       }

       if(mode=="PAN") {
            if( bedroomType == '1'){
                roundMeURL= "https://roundme.com/embed/29423/70899";
            }else if(bedroomType == '2'){
                roundMeURL= "https://roundme.com/embed/28534/68796";
            }else if(bedroomType == '3'){
                roundMeURL= "https://roundme.com/embed/31524/75796";
            }else{
                roundMeURL= "https://roundme.com/embed/48381/121294";
            }
        }
       return roundMeURL;
   }

   
}