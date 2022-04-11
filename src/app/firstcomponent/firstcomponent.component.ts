import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hello-world',
  templateUrl: './firstcomponent.component.html',
  styleUrls: ['./firstcomponent.component.scss']
})
export class FirstcomponentComponent implements OnInit {

  constructor() { }

  title = "Welcome to Angular"

  ngOnInit(): void {
  }

}
