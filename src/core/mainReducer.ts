import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export enum ViewType {
  Game = 'Game',
  LeaderBoard = 'LeaderBoard'
}

export enum ModalType {
  LogIn = 'LogIn',
  SignUp = 'SignUp'
}

export type GameData = {
  score?: number;
  finished?: boolean;
  state?: number[][];
}

export type MainState = {
  view: ViewType;
  token?: string;
  userName?: string;
  modal?: ModalType;
} & GameData;

const defaultGameState = [
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0]
]

const initialState: MainState = {
  modal: undefined,
  token: undefined,
  userName: undefined,
  view: ViewType.LeaderBoard,
  score: 0,
  finished: true,
  state: defaultGameState
};

export const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    setView: (state, action: PayloadAction<ViewType>) => {
      state.view = action.payload;
    },
    setAuthData: (state, action: PayloadAction<{ token: string, userName: string }>) => {
      state.token = action.payload.token;
      state.userName = action.payload.userName;
    },
    setGameData: (state, action: PayloadAction<GameData>) => {
      state.score = action.payload.score;
      state.state = action.payload.state;
      state.finished = action.payload.finished;
    },
    setModal: (state, action: PayloadAction<ModalType | undefined>) => {
      state.modal = action.payload;
    }
  }
});

export const { reducer: mainReducer } = mainSlice;
export const { setView, setModal, setAuthData, setGameData } = mainSlice.actions;
