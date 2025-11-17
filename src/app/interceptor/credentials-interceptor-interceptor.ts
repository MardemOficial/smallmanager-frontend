import { HttpInterceptorFn } from '@angular/common/http';

export const credentialsInterceptorInterceptor: HttpInterceptorFn = (req, next) => {
  
  const newReq = req.clone({
    withCredentials: true
  });

  return next(req);
};
