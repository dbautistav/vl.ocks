import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from "@angular/router";

import 'rxjs/add/operator/switchMap';

import { GistService } from "../gist.service";

@Injectable()
export class VlContentResolverService implements Resolve<any> {

  constructor(private gistService: GistService) { }

  public resolve(route: ActivatedRouteSnapshot): Promise<any>  {
    // //  TODO: check that this "dotted path" and final value exists!
    const gistId = route.params.id;
    return this.gistService.getGistData(gistId);
  }
}
