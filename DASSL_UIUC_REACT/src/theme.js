// src/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#0072ce', // UIUC Blue
    },
    secondary: {
      main: '#ff552e', // UIUC Orange
    },
    background: {
      default: '#f4f4f4', // A light grey background
      paper: '#ffffff', // White background for elements like Cards
    },
    text: {
      primary: '#333333', // Dark grey for primary text for better readability
      secondary: '#555555', // Slightly lighter grey for secondary text
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
    code: {
      fontFamily: '"Fira Code", monospace',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none', // Buttons with normal capitalization
        }
      }
    }
  }
});

export default theme;
