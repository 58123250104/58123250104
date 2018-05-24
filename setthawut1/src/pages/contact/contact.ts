import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  
  tdee    : number;
  bmr     : number;
  exercise: any;

  constructor(public navCtrl: NavController) {

  }
  TDEE(){
  
   if (this.exercise == "1") {
     this.tdee = 1.2 * this.bmr
   }
   else if (this.exercise == "2") {
    this.tdee = 1.375 * this.bmr
   }
   else if (this.exercise == "3") {
    this.tdee = 1.55 * this.bmr
   }  
   else if (this.exercise == "4") {
    this.tdee = 1.7 * this.bmr
   }    
   else if (this.exercise == "5"){
    this.tdee = 1.9 * this.bmr
   }else{
     
   }
    

}

}
