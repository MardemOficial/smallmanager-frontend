import { Component, signal } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { Router } from '@angular/router';
import { PermissionInterface } from '../../../interfaces/permission.interface';

@Component({
  selector: 'sm-position-form',
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatCardModule,
    MatListModule,
    MatIconModule,
  ],
  templateUrl: './position-form.component.html',
  styleUrl: './position-form.component.scss',
})
export class PositionFormComponent {
  listPermission: PermissionInterface[] = [
    { id: 10, label: 'ROLE_RH', describe: 'RH' },
    { id: 20, label: 'ROLE_ADMIN', describe: 'ADMINISTRATIVO' },
    { id: 30, label: 'ROLE_USER', describe: 'USUÁRIO' },
    { id: 40, label: 'ROLE_MATERIAL', describe: 'MATERIA-PRIMA' },
    { id: 50, label: 'ROLE_PRODUCT', describe: 'PRODUTOS' },
    { id: 60, label: 'ROLE_PEOPLE', describe: 'PESSOA' },
  ];
  listPermissionForPosition = signal<PermissionInterface[]>([]);
  permissionSelected = new FormControl<PermissionInterface | null>(null);

  constructor(private router: Router) {}

  goBack() {
    this.router.navigate(['/home/position']);
  }

  addPermission(event?: Event) {
    event?.preventDefault();
    const item = this.permissionSelected.value;
    if (item && !this.listPermissionForPosition().some((p) => p.id === item.id)) {
      this.listPermissionForPosition.update((old: PermissionInterface[]): PermissionInterface[] => {
        if (!item) return old;
        return [...old, item];
      });
      this.permissionSelected.reset();
    }
  }

  excludePermission(event?: Event, permission?: PermissionInterface) {
    event?.preventDefault();
    if (permission) {
      this.listPermissionForPosition.update((old) =>
        old.filter((perm) => perm.id !== permission.id)
      );
    }
  }
}
