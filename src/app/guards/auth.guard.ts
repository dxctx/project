import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
} from '@angular/router';

export const AuthGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const router = inject(Router);

  const user = {
    username: 'test@test.com',
    password: 'abc123',
  };

  const currentUser = JSON.parse(localStorage.getItem('blossom_user')!);

  if (!currentUser) {
    return false;
  }

  if (currentUser.username !== user.username) {
    router.navigateByUrl('/auth/login');
    return false;
  }
  if (currentUser.username === user.username) {
    if (currentUser.password !== user.password) {
      router.navigateByUrl('/auth/login');
      return false;
    }
  }

  //   if (currentUser.username === user.username) {
  //     if (currentUser.password === user.password) {
  //       return true;
  //     }
  //   }

  return true;
};
