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
  homepageAboutMe: string = `My name is Ayman Taleb and I'm a passionate Computer Engineer. I
          graduated from UC Irvine with a degree in Computer Engineering in 2023
          and Im constantly striving to improve my skill set. Currently, I am
          working as a Applications Engineer at Universal Electronics Inc. When I'm not
          working, I love to engage in personal projects, tinker with electronic
          gadgets, and code handy applications. I believe that personal projects
          are an excellent way to further develop my skills and explore unique
          ideas outside the constraints of my daily work.
          <br />
          <br />
          If you're interested in seeing the projects I've worked on, I
          encourage you to visit my GitHub profile or the Projects page above.
          Feel free to reach out to me, using the Contact page, if any of my projects catch your attention
          or if you have any questions. I'm always open to discussing
          technology, potential collaborations, or any exciting ideas you might
          have!`

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
