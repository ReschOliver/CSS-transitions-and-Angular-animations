import { animate, state, style, transition, trigger } from "@angular/animations";

export const openCloeseReusable =  trigger('openCloseReusable', [
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
])
