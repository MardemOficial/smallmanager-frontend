import { Component } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';


@Component({
  selector: 'sm-header',
  imports: [MenuComponent],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class HeaderComponent {

}
