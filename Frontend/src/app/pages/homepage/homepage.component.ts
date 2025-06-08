import { Component, OnInit } from '@angular/core';
import { TranslocoDirective } from '@jsverse/transloco';
import { InfoCardComponent } from 'spiderly';

@Component({
    templateUrl: './homepage.component.html',
    imports: [
      InfoCardComponent,
      TranslocoDirective
    ],
})
export class HomepageComponent implements OnInit {

  constructor(

  ) {}

  ngOnInit() {

  }

  ngOnDestroy(): void {

  }

}

