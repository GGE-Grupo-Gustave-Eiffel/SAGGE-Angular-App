import { Component, OnInit } from '@angular/core';
import { links_tipos } from 'src/app/utilitarios/tipos';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-termo',
  templateUrl: './termo.component.html',
  styleUrls: ['./termo.component.css']
})
export class TermoComponent implements OnInit {

  closeResult = '';
  
  constructor(private modalService: NgbModal) { }

  estrelar_termo() : void {
    alert("estrelado");
  }

  baixar_pdf() : void {
    alert("pdf descarregado")
  }

  enviar_por_email() : void {

  }

  ngOnInit(): void {
  }

  open(content : any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title', centered : true}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

}
