import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { ContentComponent } from "../content/content.component";

@Component({
  selector: 'sm-home-component',
  imports: [HeaderComponent, ContentComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {

}
