import React, { useState } from "react";
import { MuiThemeProvider, createTheme } from "@material-ui/core/styles";
import Main from "./Main";

const App = () => {
  // We keep the theme in app state
  const [theme, setTheme] = useState({
    palette: {
      primary: {
        main: "#1967D2",
      },
      secondary: {
        main: "#C5221F",
      },
      type: "light"
    }
  });

  // we change the palette type of the theme in state
  const toggleDarkTheme = () => {
    let newPaletteType = theme.palette.type === "light" ? "dark" : "light";
    let primary = "#1967D2", secondary = "#C5221F";
    if (newPaletteType === "dark") {
      primary = "#AECBFA";
      secondary = "#F6AEA9";
    }
    setTheme({
      palette: {
        primary: {
          main: primary,
        },
        secondary: {
          main: secondary,
        },
        type: newPaletteType
      }
    });
  };

  // we generate a MUI-theme from state's theme object
  const muiTheme = createTheme(theme);

  // the mui theme is used in the themeProvider.
  return (
    <MuiThemeProvider theme={muiTheme}>
      <Main onToggleDark={toggleDarkTheme} currentTheme={theme} />
    </MuiThemeProvider>
  );
};

export default App;
