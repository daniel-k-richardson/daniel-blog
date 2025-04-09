import {Component, ViewChild, inject} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {CdkPortalOutlet, PortalModule} from '@angular/cdk/portal';
import {PortalService} from './services/portal.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent, PortalModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'daniel-blog';

  @ViewChild(CdkPortalOutlet) portalOutlet!: CdkPortalOutlet;
  portalService = inject(PortalService);

  ngAfterViewInit() {
    this.portalService.setPortalOutlet(this.portalOutlet);
  }

}
