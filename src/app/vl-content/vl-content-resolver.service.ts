import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";

import 'rxjs/add/operator/switchMap';

@Injectable()
export class VlContentResolverService implements Resolve<any> {
  constructor() { }

  public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<any>  {
    console.log("route @resolve@Resolver", route);
    console.log("state @resolve@Resolver", state);

    return new Promise((resolve, reject) => {
      resolve({ route, state });
    });
  }
}
