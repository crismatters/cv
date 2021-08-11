import React, { useState, useEffect } from "react";
import { MuiThemeProvider, createTheme } from "@material-ui/core/styles";
import { blue, red } from "./assets/colors";
import Main from "./Main";

const App = () => {
  const [theme, setTheme] = useState({
    palette: {
      primary: {
        main: blue[700],
      },
      secondary: {
        main: red[700],
      },
      type: "light"
    }
  });

  const toggleDarkTheme = () => {
    let newPaletteType = theme.palette.type === "light" ? "dark" : "light";
    localStorage.setItem("theme", newPaletteType);
    let primary = blue[700], secondary = red[700];
    if (newPaletteType === "dark") {
      primary = blue[200];
      secondary = red[200];
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

  const muiTheme = createTheme(theme);

  useEffect(() => {
    localStorage.setItem("theme", theme.palette.type);
  }, [theme.palette.type]);

  return (
    <MuiThemeProvider theme={muiTheme}>
      <Main onToggleDark={toggleDarkTheme} currentTheme={theme} />
    </MuiThemeProvider>
  );
};

export default App;
