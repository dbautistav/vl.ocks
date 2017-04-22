import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-visualization',
  templateUrl: './visualization.component.html',
  styleUrls: ['./visualization.component.css']
})
export class VisualizationComponent implements OnInit {
  /*
   cf.: https://github.com/rgrove/rawgit/blob/master/public/js/url-formatter.js

   originalGist url base:
     `https://gist.githubusercontent.com`;

   devRawGit url base:
     `https://rawgit.com`;

   cdnRawGit url base:
     `https://cdn.rawgit.com`;

   common part:
      /mbostock/3686329aa6e1f5938df8eef12ec353fe/raw/1ab722df937c3ac86cac8292e34cfc7279b017f8/index.html
   -- /:user/:hash/:filename --
   * */

  baseUrl: string =
    `https://rawgit.com/mbostock/3686329aa6e1f5938df8eef12ec353fe/raw/1ab722df937c3ac86cac8292e34cfc7279b017f8/index.html`;
  devRawGitUrl;
  heightValue: string;

  constructor(private domSanitizer: DomSanitizer) {
    // const height: number = 500;
    const height: number = 960;
    this.heightValue = `${height} px`;
  }

  ngOnInit() {
    this.devRawGitUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(this.baseUrl);

  }

}
