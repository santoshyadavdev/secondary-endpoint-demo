import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-secondary',
  template: `
    <p>
      secondary works!
    </p>
  `,
  styles: [
  ]
})
export class SecondaryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
