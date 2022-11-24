import { createTheme, ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import pink from "@mui/material/colors/pink";

const theme = createTheme({
  palette: {
    primary: pink,
    secondary: {
      main: "#e2e8f0",
      light: "#edf2f7",
      dark: "#cbd5e0",
    },
    border: {
      main: "#bdbdbd",
    },
    background: {
      default: "#f7fafc",
    },
  },
  typography: {
    fontFamily: "Ubuntu, 'sans-serif'",
  },
  components: {
    MuiRadio: {
      styleOverrides: {
        root: {
          marginLeft: 6,
          padding: 6,
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          borderRadius: 6,
          "&.Mui-selected": {
            backgroundColor: "#e91e63",
            color: "#ffffff",
          },
          "&.Mui-selected:hover": {
            backgroundColor: "#e91e63",
            color: "#ffffff",
          },
        },
      },
    },
  },
});

const CustomThemeProvider = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default CustomThemeProvider;
