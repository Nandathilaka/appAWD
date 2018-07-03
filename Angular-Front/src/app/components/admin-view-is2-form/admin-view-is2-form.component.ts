import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { AllSubjectSecondSemIs } from '../../services/allIsSecondSem.service';
import * as jsPDF from 'jspdf';

@Component({
  selector: 'app-admin-view-is2-form',
  templateUrl: './admin-view-is2-form.component.html',
  styleUrls: ['./admin-view-is2-form.component.css']
})
export class AdminViewIs2FormComponent implements OnInit {

  isRepeatViewssec: AllSubjectSecondSemIs[];
  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.authService.adminViewIs2().subscribe(repeatStuIsSecond => {

      this.isRepeatViewssec = repeatStuIsSecond;
      console.log(repeatStuIsSecond);

    });
  }

  @ViewChild('content1') content1: ElementRef;
  @ViewChild('content2') content2: ElementRef;

  public downloadPDF1() {

    const doc = new jsPDF();
    const specialElementHandlers = {
      '#editor': function (element, renderer) {
        return true;
      }
    };

    const content1 = this.content1.nativeElement;

    doc.fromHTML(
      content1.innerHTML, 10, 10, {
        'width': 120,
        'elementHandlers': specialElementHandlers
      }
    );


    doc.save('IS 2nd Year 1st semester.pdf');
  };

  public downloadPDF2() {

    const doc = new jsPDF();
    const specialElementHandlers = {
      '#editor': function (element, renderer) {
        return true;
      }
    };

    const content2 = this.content2.nativeElement;

    doc.fromHTML(
      content2.innerHTML, 10, 10, {
        'width': 120,
        'elementHandlers': specialElementHandlers
      }
    );
    doc.save('IS 2nd Year 2nd semester.pdf');
  };

}
