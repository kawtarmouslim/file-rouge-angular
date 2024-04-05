import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.toggle()
  }

  toggle() {
    const element=document.body as HTMLBodyElement
    element.classList.toggle("toggle-sidebar")
  }
}
