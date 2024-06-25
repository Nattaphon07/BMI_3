import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  weight?: number;
  height?: number;

  result?: number;
  result_text?: string = "";



  constructor() { }

  oncal() {
    console.log("w :" + this.weight)
    console.log("h :" + this.height)
    if (this.weight == undefined || this.height == undefined) {
      console.log("กรุณากรอกข้อมูลให้ครบถ้วน");
      return;
    }
    var hi = this.height / 100;
    this.result = Math.floor(this.weight / (hi * hi));
    console.log("ผลลัพธ์ " + this.result)
  
    if (this.result < 18.5) {
     // console.log("ผอมเกินไป ")
  this.result_text = "ผอมเกินไป";
    } else if (this.result >= 18.6 && this.result <= 24) {
      //console.log("น้ำหนักปกติเหมาะสม");
      this.result_text = "น้ำหนักปกติเหมาะสม";
    } else if (this.result >= 25 && this.result <= 29.9) {
     // console.log("น้ำหนักเกิน");
     this.result_text = "น้ำหนักเกิน";
    } else {
     // console.log("อ้วนมาก");
     this.result_text = "อ้วนมาก";
    }
  }
  

}
