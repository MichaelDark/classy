import { Injectable } from '@angular/core';
import { ImageActions, LayoutActions } from '@classy/store/actions';
import { tap, map } from 'rxjs/operators';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { ImagesService } from '@classy/core/services/images.service';

@Injectable()
export class LayoutEffects {

  // @Effect({ dispatch: false })
  // sendImages$ = this.actions$.pipe(
  //   ofType(ImageActions.receive.type),
  //   map((action: any) => action.file),
  //   tap(file => {
  //     console.log('receive image effect');
  //     this.imagesService.classifySingle(file);
  //   })
  // );

  // @Effect({ dispatch: false })
  // setClassificationProgressMax = this.actions$.pipe(
  //   ofType(LayoutActions.)
  // )

  constructor(
    private actions$: Actions,
    private imagesService: ImagesService
  ) { }

}