import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { AllSubjectSecondSem } from '../../services/allCsSecond.service';
import * as jsPDF from 'jspdf';

@Component({
  selector: 'app-admin-view-cs2-form',
  templateUrl: './admin-view-cs2-form.component.html',
  styleUrls: ['./admin-view-cs2-form.component.css']
})
export class AdminViewCs2FormComponent implements OnInit {

  csRepeatViewssec: AllSubjectSecondSem[];
  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.authService.adminViewCs2().subscribe(repeatStuCs2 => {

      this.csRepeatViewssec = repeatStuCs2;
      console.log(repeatStuCs2);

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


    doc.save('CS 1st Year 2nd semester.pdf');
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
    doc.save('CS 2nd Year 2nd semester.pdf');
  };

}
