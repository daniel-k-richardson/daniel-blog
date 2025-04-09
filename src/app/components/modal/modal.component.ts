import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-modal',
  imports: [],
  standalone: true,
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent {

  @Output() closeModal = new EventEmitter<void>;

  close() {
    this.closeModal.emit();
  }
}
