import { CanActivateFn } from '@angular/router';
import { Router } from '@angular/router';
import { inject } from '@angular/core';
import { PermissionService } from '../service/permission.service';

export const authGuard: CanActivateFn = (route, state) => {
  const router = new Router();
  const permissionService = inject(PermissionService);


  router.navigate([""]);
  return true;
};
