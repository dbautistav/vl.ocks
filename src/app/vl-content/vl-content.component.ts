import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import { GistService } from "../gist.service";

@Component({
  selector: 'app-vl-content',
  templateUrl: './vl-content.component.html',
  styleUrls: ['./vl-content.component.css']
})
export class VlContentComponent implements OnInit {

  constructor(private route: ActivatedRoute, private gistService: GistService) { }

  ngOnInit() {
    this.route.data.subscribe(resolvedData => {
      // console.log("resolvedData @ngOnInit@VlContentComponent", resolvedData);
      // //  TODO: check that this "route" and final value exists!
      const gistId = resolvedData.data.route.params.id;
      this.gistService.getGistData(gistId)
        .then(response => console.log("response @ngOnInit@VlContentComponent", response));
    });

  }

}
