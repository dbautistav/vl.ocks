import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { VlContentComponent, VlContentResolverService } from "./vl-content";

const appRoutes: Routes = [
  //  TODO: create a "home" route/component
  {
    component: VlContentComponent,
    path: ":id",
    resolve: {
      data: VlContentResolverService,
    },
  },
  {
    path: "**",
    pathMatch: "full",
    redirectTo: "",
  },
];

@NgModule({
  exports: [
    RouterModule,
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
  ],
})
export class AppRoutingModule { }
