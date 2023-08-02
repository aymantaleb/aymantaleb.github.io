import { Component } from '@angular/core';



@Component({
  selector: 'app-resume-page',
  templateUrl: './resume-page.component.html',
  styleUrls: ['./resume-page.component.css'],
})
export class ResumePageComponent {
  pdfSource =  "assets/resumeMain.pdf";

  constructor() { }

  ngOnInit(): void {
  }
}
