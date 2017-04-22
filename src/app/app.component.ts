import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import { GistService } from "./gist.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private route: ActivatedRoute, private gistService: GistService) { }

  ngOnInit() {
    this.route.data.subscribe(resolvedData => {
      console.log("resolvedData @ngOnInit@AppComponent", resolvedData);

      this.gistService.getGistData('3686329aa6e1f5938df8eef12ec353fe')
        .then(response => console.log("response @ngOnInit@AppComponent", response));
    });
  }

}
