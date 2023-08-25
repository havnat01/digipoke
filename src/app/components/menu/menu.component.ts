import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'dp-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  constructor(public router: Router) {}

  ngOnInit() {}

  get isHomeRoute(): boolean {
    return this.router.url === '/';
  }
}
