import { animate, AnimationTriggerMetadata, state, style, transition, trigger, useAnimation } from '@angular/animations';

export type StepContentPositionState = 'previous' | 'current' | 'next';

const DEFAULT_DURATION = 500;

export function horizontalStepTransitionAnimation(options?: { anchor: string; duration: number }): AnimationTriggerMetadata {
  return trigger((options && options.anchor) || 'stepTransition', [
    state('previous', style({ transform: 'translate3d(-100%, 0, 0)', visibility: 'hidden' })),
    state('current', style({ transform: 'none', visibility: 'visible' })),
    state('next', style({ transform: 'translate3d(100%, 0, 0)', visibility: 'hidden' })),
    transition('* => *', animate('{{duration}}ms cubic-bezier(0.35, 0, 0.25, 1)'), {
      params: {
        duration: (options && options.duration) || 2000
      }
    })
  ]);
}
