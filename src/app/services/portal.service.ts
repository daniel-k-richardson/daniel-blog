import { Injectable } from '@angular/core';
import {CdkPortalOutlet, ComponentPortal} from '@angular/cdk/portal';
import {ModalComponent} from '../components/modal/modal.component';

@Injectable({
  providedIn: 'root'
})
export class PortalService {
  private portalOutlet!: CdkPortalOutlet;

  setPortalOutlet(portalOutlet: CdkPortalOutlet) {
    this.portalOutlet = portalOutlet;
  }

  openModal() {
    if (this.portalOutlet?.hasAttached()) {
      this.portalOutlet.detach();
    }
    const portal = new ComponentPortal(ModalComponent);
    const modalRef = this.portalOutlet.attach(portal);

    modalRef.instance.closeModal.subscribe(() => {
      this.closeModal();
    });
  }

  closeModal() {
    if (this.portalOutlet?.hasAttached()) {
      this.portalOutlet.detach();
    }
  }
}
