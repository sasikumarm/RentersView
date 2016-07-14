import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {HomePage} from '../home/home';


@Component({
    templateUrl: 'build/pages/contact/contact.html'
})
export class ContactPage {

    public firstName:string;
    public lastName:string;
    public email:string;
    public message:string;

    constructor(private nav: NavController) {
    }

    onCancelClick() {
        this.nav.pop();
    }

    onSubmitClick() {
        this.nav.pop();
    }
}
