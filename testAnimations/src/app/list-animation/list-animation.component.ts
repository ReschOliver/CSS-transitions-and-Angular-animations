import { Component, OnInit,  } from '@angular/core';

import {
  trigger,
  state,
  style,
  animate,
  transition,
  query,
  stagger,
  animation,
  keyframes
} from '@angular/animations';
import { isPlatformBrowser } from '@angular/common';
import { transformAll } from '@angular/compiler/src/render3/r3_ast';


@Component({
  selector: 'app-list-animation',
  templateUrl: './list-animation.component.html',
  styleUrls: ['./list-animation.component.scss'],

  animations:[


    trigger('listAnimation', [
      transition('* => *', [

        query(':enter', style({ opacity: 0 }), {optional: true}),

        query(':enter', stagger('300ms', [
          animate('1s ease-in', keyframes([
            style({opacity: 0, transform: 'translateY(-75px)', offset: 0}),
            style({opacity: .5, transform: 'translateY(35px)',  offset: 0.3}),
            style({opacity: 1, transform: 'translateY(0)',     offset: 1.0}),
          ]))]), {optional: true}),

          query(':leave', stagger('300ms', [
            animate('1s ease-in', keyframes([
              style({opacity: 1, transform: 'translateY(0)', offset: 0}),
              style({opacity: .5, transform: 'translateY(35px)', offset: 0.3}),
              style({opacity: 0, transform: 'translateY(-75px)', offset: 1.0}),
            ]))]), {optional: true}),
      ])
    ]),

    trigger('explainerAnim', [
      transition('* => *', [
        query('.col', style({ opacity: 0, transform: 'translateX(-40px)' })),

        query('.col', stagger('500ms', [
          animate('800ms 1.2s ease-out', style({ opacity: 1, transform: 'translateX(0)' })),
        ])),

        query('.col', [
          animate(1000, style('*'))
        ])

      ])
    ]),


  ]
})

export class ListAnimationComponent implements OnInit {

  ngOnInit(): void {}

  items:string[];


  constructor() {
    this.items = ['Hey this is an item', 'Here is another one','This is awesome'];
  }

  pushItem():void {
    this.items.push('Oh yeah that is awesome');
  }
  removeItem():void {
    this.items.pop();
  }
}



