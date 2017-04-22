import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { VlContentComponent, VlContentResolverService } from "./vl-content";

const appRoutes: Routes = [
  {
    component: VlContentComponent,
    path: "",
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
