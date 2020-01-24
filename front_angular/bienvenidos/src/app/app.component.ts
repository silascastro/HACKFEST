import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bienvenidos';
    
  constructor(private matIconRegistry: MatIconRegistry,
              private domSanitizer: DomSanitizer
     ){
      this.matIconRegistry.addSvgIcon(
        "custom_edit",
        this.domSanitizer.bypassSecurityTrustResourceUrl("../../assets/custom_icons/24px (11).svg"),
      );

      this.matIconRegistry.addSvgIcon(
        "custom_toggle_off",
        this.domSanitizer.bypassSecurityTrustResourceUrl("../../assets/custom_icons/24px (16).svg"),
      );

      this.matIconRegistry.addSvgIcon(
        "custom_toggle_on",
        this.domSanitizer.bypassSecurityTrustResourceUrl("../../assets/custom_icons/24px (17).svg"),
      );


      this.matIconRegistry.addSvgIcon(
        "custom_arrow_drop_up_and_down",
        this.domSanitizer.bypassSecurityTrustResourceUrl("../../assets/custom_icons/24px (18).svg"),
      );

      this.matIconRegistry.addSvgIcon(
        "custom_file_copy",
        this.domSanitizer.bypassSecurityTrustResourceUrl("../../assets/custom_icons/copy.svg"),
      );

      this.matIconRegistry.addSvgIcon(
        "custom_file_pass",
        this.domSanitizer.bypassSecurityTrustResourceUrl("../../assets/custom_icons/insert_drive_file-24px.svg"),
      );

      this.matIconRegistry.addSvgIcon(
        "custom_delete",
        this.domSanitizer.bypassSecurityTrustResourceUrl("../../assets/custom_icons/outline-delete-24px.svg"),
      );


      this.matIconRegistry.addSvgIcon(
        "up_and_down",
        this.domSanitizer.bypassSecurityTrustResourceUrl("../../assets/custom_icons/24px (18).svg"),
      );
    }
}
