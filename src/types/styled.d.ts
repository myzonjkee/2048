import 'styled-components';

interface IPalette {
  main: string
  contrastText: string
}

declare module 'styled-components' {
  export interface DefaultTheme {
    radius: string;
    palette: {
      text: string;
      primary: string;
      background: string;
    }
  }
}