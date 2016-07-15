import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';

@Injectable()
export class GoogleURLService {
    constructor() {
    }


   getGoogleUrlForVirtualRealityView(bedroomType:String){

      let googleURL:string;
       
        if( bedroomType == '1'){
            googleURL= "https://storage.googleapis.com/vrview/index.html?image=//storage.googleapis.com/vrview/examples/coral.jpg&is_stereo=true";
        } else if(bedroomType == '2'){
            googleURL= "https://storage.googleapis.com/vrview/index.html?image=//storage.googleapis.com/vrview/examples/coral.jpg&is_stereo=true";
        } else if(bedroomType == '3'){
            googleURL= "https://storage.googleapis.com/vrview/index.html?image=//storage.googleapis.com/vrview/examples/coral.jpg&is_stereo=true";
        } else{
            googleURL= "https://storage.googleapis.com/vrview/index.html?image=//storage.googleapis.com/vrview/examples/coral.jpg&is_stereo=true";
        } 

      return googleURL;
   }

    getGoogleUrlForPanoramicView(bedroomType:String){
 
      let googleURL:string;
       
        if( bedroomType == '1'){
            googleURL= "https://storage.googleapis.com/vrview/index.html?image=//storage.googleapis.com/vrview/examples/coral.jpg&is_stereo=true";
        } else if(bedroomType == '2'){
            googleURL= "https://storage.googleapis.com/vrview/index.html?image=//storage.googleapis.com/vrview/examples/coral.jpg&is_stereo=true";
        } else if(bedroomType == '3'){
            googleURL= "https://storage.googleapis.com/vrview/index.html?image=//storage.googleapis.com/vrview/examples/coral.jpg&is_stereo=true";
        } else{
            googleURL= "https://storage.googleapis.com/vrview/index.html?image=//storage.googleapis.com/vrview/examples/coral.jpg&is_stereo=true";
        } 

      return googleURL;
    }
 }
