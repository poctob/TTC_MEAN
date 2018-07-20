import { Component, OnInit, Input} from '@angular/core';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-heroes-modal',
  template: `
  
  <div class="modal-header">
    <h4 class="modal-title" id="modal-basic-title">Delete Confirmation</h4>
    
    <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
      <span aria-hidden="true">&times;</span>
    </button>
    
  </div>
  
  <div class="modal-body">
    <p>Are you sure that you want to delete {{name}}?</p>
  </div>
  
  <div class="modal-footer">
    <button type="button" class="btn btn-success" (click)="activeModal.dismiss('Cancel click')">No, I changed my mind...</button>
    <button type="button" class="btn btn-danger" (click)="activeModal.close('Confirm click')">Yes, do it!</button>
  </div>
  
  `
})
export class HeroesModalComponent implements OnInit {

  @Input() name;

  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit() {
  }

}
