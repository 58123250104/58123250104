import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  
  bmr   : number
  weight: number
  height: number 
  Age   : number
  gender: any;
  
  constructor(public navCtrl: NavController) {
  }
  
  BMR() {
    if(this.gender == "f") {
      this.bmr =  66 + (13.7 * this.weight) + (5 * this.height) - (6.8 * this.Age) 
    } else {
      this.bmr =  665 + (9.6 * this.weight) + (1.8 * this.height) - (4.7 * this.Age)
    }   
          
      
   }
  
   

}
