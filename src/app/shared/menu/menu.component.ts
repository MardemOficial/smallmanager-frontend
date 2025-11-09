import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'sm-menu',
  imports: [MatMenuModule,MatButtonModule, MatIconModule, RouterLink],
  templateUrl: './menu.html',
  styleUrl: './menu.scss',
})
export class MenuComponent {

}
