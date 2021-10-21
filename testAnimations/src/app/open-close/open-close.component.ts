

import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  query,
  stagger
} from '@angular/animations';

import { openCloeseReusable } from "../animations";

@Component({
  selector: 'app-open-close',
  templateUrl: './open-close.component.html',
  styleUrls: ['./open-close.component.scss'],

  animations: [
    openCloeseReusable,
    trigger('openClose', [
      state('open', style({
        height: '200px',
        opacity: 1,
        backgroundColor: 'yellow'
      })),
      state('closed', style({
        height: '100px',
        opacity: 0.8,
        backgroundColor: 'blue'
      })),
      transition('open => closed', [
        animate('1s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
    ]),
  ],
})
export class OpenCloseComponent{


  isOpen = true;
  isOpen2 = true;

  toggle() {
    this.isOpen = !this.isOpen;
  }

  toggleReusable() {
    this.isOpen2 = !this.isOpen2;
  }


}
