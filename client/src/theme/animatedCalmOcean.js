// // src/theme/calmOcean.js
// import { createTheme } from '@mui/material/styles';

// const calmOceanColors = {
//   base: '#0A2239',
//   surface: '#1D3557',
//   overlay: '#457B9D',
//   muted: '#A8DADC',
//   subtle: '#F1FAEE',
//   text: '#E5E5E5',
//   love: '#E63946',
//   gold: '#FFB703',
//   rose: '#FB8500',
//   pine: '#219EBC',
//   foam: '#8ECAE6',
//   iris: '#023047',
//   highlightLow: '#264653',
//   highlightMed: '#2A9D8F',
//   highlightHigh: '#E76F51',
// };

// const calmOceanTheme = createTheme({
//   MuiCssBaseline: {
//     styleOverrides: `
//       @import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@300;400;700&family=Merriweather:wght@300;400;700&display=swap');
//     `,
//   },
//   palette: {
//     mode: 'dark',
//     background: {
//       default: calmOceanColors.base,
//       paper: calmOceanColors.surface,
//     },
//     primary: {
//       main: calmOceanColors.pine,
//     },
//     secondary: {
//       main: calmOceanColors.foam,
//     },
//     error: {
//       main: calmOceanColors.love,
//     },
//     warning: {
//       main: calmOceanColors.gold,
//     },
//     info: {
//       main: calmOceanColors.iris,
//     },
//     success: {
//       main: calmOceanColors.highlightMed,
//     },
//     text: {
//       primary: calmOceanColors.text,
//       secondary: calmOceanColors.subtle,
//     },
//   },
//   typography: {
//     fontFamily: '"Roboto Slab", "Roboto", "Helvetica", "Arial", sans-serif',
//     h1: {
//       fontFamily: '"Merriweather", serif',
//     },
//     h2: {
//       fontFamily: '"Merriweather", serif',
//     },
//     h3: {
//       fontFamily: '"Merriweather", serif',
//     },
//     h4: {
//       fontFamily: '"Merriweather", serif',
//     },
//     h5: {
//       fontFamily: '"Merriweather", serif',
//     },
//     h6: {
//       fontFamily: '"Merriweather", serif',
//     },
//   },
//   components: {
//     MuiAppBar: {
//       styleOverrides: {
//         root: {
//           backgroundColor: calmOceanColors.overlay,
//         },
//       },
//     },
//     MuiButton: {
//       styleOverrides: {
//         root: {
//           textTransform: 'capitalize',
//           borderRadius: '8px',
//         },
//       },
//     },
   
//   },
// });

// export default calmOceanTheme;


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

const animatedCalmOceanTheme = createTheme({
  MuiCssBaseline: {
    styleOverrides: `
      @import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@300;400;700&family=Merriweather:wght@300;400;700&display=swap');
      
      body {
        background: linear-gradient(120deg, ${calmOceanColors.base}, ${calmOceanColors.surface});
        animation: gradientBackground 15s ease infinite;
      }

      @keyframes gradientBackground {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }
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
          animation: 'fadeIn 1s ease-in-out',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'capitalize',
          borderRadius: '8px',
          transition: 'transform 0.3s ease, background-color 0.3s ease',
          '&:hover': {
            transform: 'scale(1.05)',
            backgroundColor: calmOceanColors.highlightMed,
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
          transition: 'transform 0.3s ease',
          '&:hover': {
            transform: 'translateY(-10px)',
          },
        },
      },
    },
  },
});

export default animatedCalmOceanTheme;
