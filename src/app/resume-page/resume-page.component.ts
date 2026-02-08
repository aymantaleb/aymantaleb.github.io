import { Component, OnInit, HostListener } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-resume-page',
  templateUrl: './resume-page.component.html',
  styleUrls: ['./resume-page.component.css'],
})
export class ResumePageComponent {
  pdfSource = 'assets/resumeMain.pdf';
  zoomLevel = .95;
  orignalSize = false;
  zoomScale = 'page-width';
  isSmallScreen = false;
  isMobileView: boolean = false;

  constructor() {
    this.onResize();
  }

  downloadPDF() {
    const link = document.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', 'assets/resumeMain.pdf');
    link.setAttribute('download', 'resumeMain.pdf');
    document.body.appendChild(link);
    link.click();
    link.remove();
  }

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
}
