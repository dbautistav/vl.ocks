import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-vl-content',
  templateUrl: './vl-content.component.html',
  styleUrls: ['./vl-content.component.css']
})
export class VlContentComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe(response => {
      // console.log("response @ngOnInit@VlContentComponent", response);
    });

  }

}
