import { Component, OnInit, HostListener } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  isMobileView: boolean = false;
  clickCount: number = 0;
  headshotImg: string = "assets/headshot.png"
  monkeyImg: string = "assets/monkey.png"

  constructor() {}

  ngOnInit() {
    this.checkIfMobileView();
    fromEvent(window, 'resize')
    .pipe(debounceTime(200)) // Adjust the debounce time as needed
    .subscribe(() => this.checkIfMobileView());
  }

  @HostListener('window:resize')
  onResize() {
    this.checkIfMobileView();
  }

  private checkIfMobileView() {
    this.isMobileView = window.innerWidth <= 1000; // You can adjust this threshold as needed
  }


  imgClick(){
    if(this.clickCount == 5){
      this.clickCount = 0;
      this.headshotImg = this.monkeyImg;
    }
    this.clickCount++;
  }

}
