import { Component } from '@angular/core';
import {MatToolbarModule} from "@angular/material/toolbar";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatToolbarModule],//inclusao do toolbar do material
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
