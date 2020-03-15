import 'styled-components';
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      main: string
      secondary: string
      danger: string
    },
    fonts: {
      header: string
      primary: string
      secondary: string
      filled: string
    },
    container: {
      background: string
    },
  }
};