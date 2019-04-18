import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import * as fromCounter from './counter.reducer';
import * as fromFiles from './file.reducer';

export interface State {
  counter: fromCounter.State
  files: fromFiles.FileState
}

export const reducers: ActionReducerMap<State> = {
  counter: fromCounter.reducer,
  files: fromFiles.reducer
};

export function logger(reducer: ActionReducer<State>): ActionReducer<State> {
  return (state, action) => {
    const result = reducer(state, action);
    console.groupCollapsed(action.type);
    console.log('prev state', state);
    console.log('action', action);
    console.log('next state', result);
    console.groupEnd();

    return result;
  };
}

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? [logger]
  : [];

export const getCounterState = createFeatureSelector<State, fromCounter.State>('counter');

export const getFilesState = createFeatureSelector<State, fromFiles.FileState>('files');
