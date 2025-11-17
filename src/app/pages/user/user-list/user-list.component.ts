import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { UsuarioService } from '../usuario.service';
import { UsuarioInterface } from '../usuario.interface';
import { UsuarioListInterface } from '../usuario-list.interface';
import { MatPaginatorModule } from '@angular/material/paginator';
import { PaginationClass } from '../../../classes/pagination.class';

@Component({
  selector: 'sm-user-list',
  imports: [
    RouterModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatPaginatorModule,
  ],
  templateUrl: './user-list.html',
  styleUrls: ['./user-list.scss'],
})
export class UserListComponent implements OnInit {
  listUser: UsuarioInterface[] = [];
  listUserData!: UsuarioListInterface;

  constructor(
    private usuarioService: UsuarioService,
    private snackBar: MatSnackBar,
    private paginationClass: PaginationClass
  ) {}

  ngOnInit() {
    this.usuarioService.userList().subscribe((user) => {
      next:  {
        this.listUserData = user as UsuarioListInterface;
        this.listUser = this.listUserData.listUser;
      }
      error: (erro: HttpErrorResponse) => {
          if(erro.status === 401){
            this.snackBar.open("Você não tem permissão de acesso!", "Ok",{duration: 5000});
          } else {
            this.snackBar.open("Erro ao carregar os usuários!","Ok", {duration: 5000})
          }
      }
    });
  }
}
