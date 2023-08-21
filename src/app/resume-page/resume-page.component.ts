import { Component } from '@angular/core';



@Component({
  selector: 'app-resume-page',
  templateUrl: './resume-page.component.html',
  styleUrls: ['./resume-page.component.css'],
})
export class ResumePageComponent {
  pdfSource =  "assets/resumeMain.pdf";
  zoomLevel = 0.815;
  orignalSize = false;
  zoomScale = 'page-width';
  isSmallScreen = false;

  constructor() { 
    this.onResize();
  }

  downloadPDF(){
    const link = document.createElement('a');
    link.setAttribute('target','_blank');
    link.setAttribute('href','assets/resumeMain.pdf');
    link.setAttribute('download','AymanTalebResume.pdf');
    document.body.appendChild(link);
    link.click();
    link.remove();
  }

  onResize(){
    this.isSmallScreen = window.innerWidth <= 700;
  }

  ngOnInit(): void {
  }
}
