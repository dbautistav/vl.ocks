import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from "@angular/router";

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

  baseUrl: string;
  devRawGitUrl;
  heightValue: string;

  constructor(
    private domSanitizer: DomSanitizer,
    private route: ActivatedRoute,
  ) {
    // const height: number = 500;
    const height: number = 960;
    this.heightValue = `${height} px`;
  }

  ngOnInit() {
    this.route.data.subscribe(response => {
      console.log("response @ngOnInit@viz", response);
      // const originalBaseUrlRegex = /gist\.githubusercontent\.com/;
      // const rawgitBaseUrl = `rawgit.com`;
      // this.baseUrl = response[`data`][`files`][`index.html`][`raw_url`].replace(originalBaseUrlRegex, rawgitBaseUrl);
      this.baseUrl = response[`data`][`files`][`index.html`][`raw_url`];

      // -- Constants --------------------------------------------------------------
      const GITHUB_API_URL = 'https://api.github.com';

      const REGEX_GIST_URL     = /^https?:\/\/gist\.github\.com\/.+?\/([0-9a-f]+)(?:\/([0-9a-f]+))?/i;
      const REGEX_RAW_GIST_URL = /^https?:\/\/gist\.githubusercontent\.com\/(.+?\/[0-9a-f]+\/raw\/(?:[0-9a-f]+\/)?.+\..+)$/i;

      /**
       Matches a GitHub raw URL.

       Captures:

       1.  Username
       2.  Repo
       3.  Ref
       4.  File path
       **/
      const REGEX_RAW_REPO_URL = /^https?:\/\/raw\.github(?:usercontent)?\.com\/(.+?)\/(.+?)\/(.+?)\/(.+)/i;

      /**
       Matches a GitHub repo URL.

       Captures:

       1.  Username
       2.  Repo
       3.  Ref
       4.  File path
       **/
      const REGEX_REPO_URL = /^https?:\/\/github\.com\/(.+?)\/(.+?)\/(?!releases\/)(?:(?:blob|raw)\/)?(.+?)\/(.+)/i;

      // Base URL to use when requesting gist files.
      const baseGistUrl = 'https://gist.githubusercontent.com';

      // Base URL to use when requesting repo files.
      const baseRepoUrl = 'https://raw.githubusercontent.com';

      // Domain to use for CDN requests to RawGit.
      const cdnDomain = 'cdn.rawgit.com';

      // GitHub "username/repo" from which RawGit's own static assets should be
      // loaded via the CDN. Set this to a falsy value to disable loading static
      // assets from the CDN.
      const cdnRepo = 'rgrove/rawgit';

      // Git tag that points to the GitHub commit from which RawGit's own static
      // assets should be loaded via the CDN. Set this to a falsy value to disable
      // loading static assets from the CDN.
      const cdnTag = 'cdn-20170108';

      // Domain to use for dev requests to RawGit.
      const devDomain = 'rawgit.com';

      let url = this.baseUrl;
      console.log("url", url);

      // function formatUrl() {
      url = url.trim();

      if (REGEX_RAW_REPO_URL.test(url)) {
        // formatRawRepoUrl(url);
        console.log("REGEX_RAW_REPO_URL!!!");
      } else if (REGEX_RAW_GIST_URL.test(url)) {
        // formatRawGistUrl(url);
        console.log("REGEX_RAW_GIST_URL!!!");
      } else if (REGEX_REPO_URL.test(url)) {
        // formatRepoUrl(url);
        console.log("REGEX_REPO_URL!!!");
      } else if (REGEX_GIST_URL.test(url)) {
        // requestGistUrl(url);
        console.log("REGEX_GIST_URL!!!");
      } else {
        // setInvalid();
        console.log("ELSE!!!");
      }
      // }

      // url = url.trim();
      url = url.replace(REGEX_RAW_GIST_URL, 'https://' + devDomain + '/$1');
      console.log("updated url", url);
      this.devRawGitUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(url);
    });

    // baseUrl: string =
    //   `https://rawgit.com/mbostock/3686329aa6e1f5938df8eef12ec353fe/raw/1ab722df937c3ac86cac8292e34cfc7279b017f8/index.html`;
    // // https://gist.githubusercontent.com/mbostock/3686329aa6e1f5938df8eef12ec353fe/raw/ee9edbbcab535a5ffdd577cc0327a475ba5d5ed4/index.html
    // // https://rawgit.com/mbostock/3686329aa6e1f5938df8eef12ec353fe/raw/ee9edbbcab535a5ffdd577cc0327a475ba5d5ed4/index.html

    // https://gist.githubusercontent.com/mbostock/3686329aa6e1f5938df8eef12ec353fe/raw/ee9edbbcab535a5ffdd577cc0327a475ba5d5ed4/index.html
    // https://rawgit.com/mbostock/3686329aa6e1f5938df8eef12ec353fe/raw/ee9edbbcab535a5ffdd577cc0327a475ba5d5ed4/index.html
    // -----
    // https://gist.githubusercontent.com/mbostock/3686329aa6e1f5938df8eef12ec353fe/raw/1ab722df937c3ac86cac8292e34cfc7279b017f8/index.html
    // https://rawgit.com/mbostock/3686329aa6e1f5938df8eef12ec353fe/raw/1ab722df937c3ac86cac8292e34cfc7279b017f8/index.html
  }
}
