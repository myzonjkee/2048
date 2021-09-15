import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export enum ViewType {
  Game = 'Game',
  SignUp = 'SignUp',
  LeaderBoard = 'LeaderBoard'
}

export interface MainState {
  view: ViewType;
}

const initialState: MainState = {
  view: ViewType.LeaderBoard
};

export const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    changeView: (state, action: PayloadAction<ViewType>) => {
      state.view = action.payload;
    },
  }
});

export const { changeView } = mainSlice.actions;
export const { reducer: mainReducer } = mainSlice;
