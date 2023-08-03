import { Component } from '@angular/core';



@Component({
  selector: 'app-resume-page',
  templateUrl: './resume-page.component.html',
  styleUrls: ['./resume-page.component.css'],
})
export class ResumePageComponent {
  pdfSource =  "assets/resumeMain.pdf";

  constructor() { }

  downloadPDF(){
    const link = document.createElement('a');
    link.setAttribute('target','_blank');
    link.setAttribute('href','assets/resumeMain.pdf');
    link.setAttribute('download','AymanTalebResume.pdf');
    document.body.appendChild(link);
    link.click();
    link.remove();
  }

  ngOnInit(): void {
  }
}
