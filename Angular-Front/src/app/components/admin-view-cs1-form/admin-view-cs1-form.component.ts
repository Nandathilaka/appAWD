import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { AllSubjectFirstSem } from '../../services/allCsFirstSem.service';
import * as jsPDF from 'jspdf';

@Component({
  selector: 'app-admin-view-cs1-form',
  templateUrl: './admin-view-cs1-form.component.html',
  styleUrls: ['./admin-view-cs1-form.component.css']
})
export class AdminViewCs1FormComponent implements OnInit {

  csRepeatViewss: AllSubjectFirstSem[];
  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.authService.adminViewCs1().subscribe(repeatStuCs1 => {

      this.csRepeatViewss = repeatStuCs1;
      console.log(repeatStuCs1);

    });
  }

  @ViewChild('content1') content1: ElementRef;
  @ViewChild('content2') content2: ElementRef;
  @ViewChild('content3') content3: ElementRef;

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


    doc.save('CS 1st Year 1st semester.pdf');
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
    doc.save('CS 2nd Year 1st semester.pdf');
  };

  public downloadPDF3() {

    const doc = new jsPDF();
    const specialElementHandlers = {
      '#editor': function (element, renderer) {
        return true;
      }
    };

    const content3 = this.content3.nativeElement;

    doc.fromHTML(
      content3.innerHTML, 10, 10, {
        'width': 120,
        'elementHandlers': specialElementHandlers
      }
    );
    doc.save('CS 3rd Year 1st semester.pdf');
  };

  // downloadPDF(){
  //   const doc = new jsPDF();
  //   doc.text('some text here',10,10);
  //   doc.save('Test.pdf');
  //  }

}
