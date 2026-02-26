import { CanDeactivateFn } from '@angular/router';

export const outGuardGuard: CanDeactivateFn<any> = (component) => {

  if (component && component.canDeactivate) {
    return component.canDeactivate();
  }
  return true;
};