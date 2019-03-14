import {
    trigger,
    state,
    style,
    animate,
    transition,
    // ...
  } from '@angular/animations';

export const customAnimations = [
    trigger('openClose', [
        state('open', style({
          overflow: 'hidden',
          width: '*',
          height: '*'
        })),
        state('closed', style({
          overflow: 'hidden',
          width: '0px',
          height: '0px'
        })),
        transition('open => closed', animate('300ms ease-in')),
        transition('closed => open', animate('300ms ease-out'))
      ])
];
