import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { catchError, throwError } from 'rxjs';

export const erroHandlerInterceptor: HttpInterceptorFn = (req, next) => {

  const notification: MatSnackBar = inject(MatSnackBar);

  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      let msg;
      if(error.error[0].message != undefined){
        msg = error.error[0].message;
      }else{
        msg = error.error;
      }
      console.log(`${msg}`);
      notification.open(`${msg}`, "Ok", {duration: 5000, horizontalPosition: 'right', verticalPosition: 'top', panelClass: ['error-snackbar']});
      return throwError(() => error);
    })
   
  );
};
