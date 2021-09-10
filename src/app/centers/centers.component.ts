import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-centers',
  templateUrl: './centers.component.html',
  styleUrls: ['./centers.component.scss'],
})
export class CentersComponent implements OnInit {
  pdfSrc = 'https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf';
  constructor(private modalService: NgbModal) {}
  open(content) {
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        (result) => {
          // this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          // this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }

  ngOnInit(): void {}
}
