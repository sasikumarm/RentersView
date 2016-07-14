import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {HomePage} from '../home/home';


@Component({
    templateUrl: 'build/pages/contact/contact.html'
})
export class ContactPage {

    constructor(private nav: NavController) {
    }

     goToHomePage() {
        this.nav.pop();
    }

}
