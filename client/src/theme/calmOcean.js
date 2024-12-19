// src/theme/calmOcean.js
import { createTheme } from '@mui/material/styles';

const calmOceanColors = {
  base: '#0A2239',
  surface: '#1D3557',
  overlay: '#457B9D',
  muted: '#A8DADC',
  subtle: '#F1FAEE',
  text: '#E5E5E5',
  love: '#E63946',
  gold: '#FFB703',
  rose: '#FB8500',
  pine: '#219EBC',
  foam: '#8ECAE6',
  iris: '#023047',
  highlightLow: '#264653',
  highlightMed: '#2A9D8F',
  highlightHigh: '#E76F51',
};

const calmOceanTheme = createTheme({
  MuiCssBaseline: {
    styleOverrides: `
      @import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@300;400;700&family=Merriweather:wght@300;400;700&display=swap');
    `,
  },
  palette: {
    mode: 'dark',
    background: {
      default: calmOceanColors.base,
      paper: calmOceanColors.surface,
    },
    primary: {
      main: calmOceanColors.pine,
    },
    secondary: {
      main: calmOceanColors.foam,
    },
    error: {
      main: calmOceanColors.love,
    },
    warning: {
      main: calmOceanColors.gold,
    },
    info: {
      main: calmOceanColors.iris,
    },
    success: {
      main: calmOceanColors.highlightMed,
    },
    text: {
      primary: calmOceanColors.text,
      secondary: calmOceanColors.subtle,
    },
  },
  typography: {
    fontFamily: '"Roboto Slab", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontFamily: '"Merriweather", serif',
    },
    h2: {
      fontFamily: '"Merriweather", serif',
    },
    h3: {
      fontFamily: '"Merriweather", serif',
    },
    h4: {
      fontFamily: '"Merriweather", serif',
    },
    h5: {
      fontFamily: '"Merriweather", serif',
    },
    h6: {
      fontFamily: '"Merriweather", serif',
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: calmOceanColors.overlay,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'capitalize',
          borderRadius: '8px',
        },
      },
    },
   
  },
});

export default calmOceanTheme;