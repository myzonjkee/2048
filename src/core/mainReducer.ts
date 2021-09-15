import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export enum ViewType {
  Game = 'Game',
  LeaderBoard = 'LeaderBoard'
}

export enum ModalType {
  LogIn = 'LogIn',
  SignUp = 'SignUp'
}

export interface MainState {
  view: ViewType;
  token?: string;
  userName?: string;
  modal?: ModalType;
}

const initialState: MainState = {
  modal: undefined,
  token: undefined,
  userName: undefined,
  view: ViewType.LeaderBoard
};

export const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    changeView: (state, action: PayloadAction<ViewType>) => {
      state.view = action.payload;
    },
    setAuthData: (state, action: PayloadAction<{ token: string, userName: string }>) => {
      state.token = action.payload.token;
      state.userName = action.payload.userName;
    },
    setModal: (state, action: PayloadAction<ModalType | undefined>) => {
      state.modal = action.payload;
    },
  }
});

export const { reducer: mainReducer } = mainSlice;
export const { changeView, setModal, setAuthData } = mainSlice.actions;
