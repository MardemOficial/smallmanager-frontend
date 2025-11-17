import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { RouterModule } from '@angular/router';
import { PaginationClass } from '../../../classes/pagination.class';
import { PositionService } from '../position.service';
import { PositionInterface } from '../position.interface';
import { PositionListInterface } from '../position-list.interface';
import { HttpErrorResponse } from '@angular/common/http';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'sm-position-list',
  imports: [
    RouterModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatPaginatorModule,
  ],
  templateUrl: './position-list.component.html',
  styleUrl: './position-list.component.scss',
})
export class PositionListComponent implements OnInit {
  listPosition: PositionInterface[] = [];

  label = new FormControl<string | null>('');
  pageCurrent: number = 0;
  sizePage: number = 0;

  constructor(
    private positionService: PositionService,
    private snackBar: MatSnackBar,
    private paginationClass: PaginationClass
  ) {}

  ngOnInit() {
    this.positionService.positionList().subscribe((position) => {
      next: {
        this.listPosition = position.profileList;
        this.pageCurrent = position.page;
        this.sizePage = position.limit;
      }
      error: (error: HttpErrorResponse) => {
        if (error.status === 401) {
          this.snackBar.open('Você não tem permissão de acesso!', 'Ok', { duration: 5000 });
        } else {
          this.snackBar.open('Erro ao carregar os usuários!', 'Ok', { duration: 5000 });
        }
      };
    });
  }

  searchPosition() {
    if (this.label.value) {
      this.positionService.positionSearch(this.label.value as string).subscribe((position) => {
        next: {
          this.listPosition = position.profileList;
        }
        error: (error: HttpErrorResponse) => {
          if (error.status === 401) {
            this.snackBar.open('Você não tem permissão de acesso!', 'Ok', { duration: 5000 });
          } else {
            this.snackBar.open('Erro ao carregar os usuários!', 'Ok', { duration: 5000 });
          }
        };
      });
    } else {
      this.positionService.positionList().subscribe((position) => {
        next: {
          this.listPosition = position.profileList;
        }
        error: (error: HttpErrorResponse) => {
          if (error.status === 401) {
            this.snackBar.open('Você não tem permissão de acesso!', 'Ok', { duration: 5000 });
          } else if (error.status == 403) {
            this.snackBar.open('Erro ao carregar os Cargo!', 'Ok', { duration: 5000 });
          } else {
            this.snackBar.open('Erro ao carregar os Cargo!', 'Ok', { duration: 5000 });
          }
        };
      });
    }
  }
}
