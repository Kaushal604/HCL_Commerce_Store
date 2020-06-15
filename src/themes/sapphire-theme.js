/*
 *==================================================
 * Licensed Materials - Property of HCL Technologies
 *
 * HCL Commerce
 *
 * (C) Copyright HCL Technologies Limited 2020
 *
 *==================================================
 */
import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";
import { sharedOverrides, merge } from "./shared-theme";
import { palette } from "./color-palette";

const { main, light, dark } = palette.sapphire;

export const sapphireOverrides = {
  name: "Sapphire",
  palette: {
    primary: {
      light: light,
      main: main,
      dark: dark,
      contrastText: "#fff"
    },
    secondary: {
      light: light,
      main: main,
      dark: dark,
      contrastText: "#fff"
    }
  },
  button: {
    backgroundColor: main,
    "&:hover": {
      backgroundColor: main
    }
  },
  child: {
    backgroundColor: main
  },
  rippleVisible: {
    opacity: 0.5
  }
};

const combinedOverides = merge(sharedOverrides, sapphireOverrides);
const theme = createMuiTheme(combinedOverides);
const sapphireTheme = responsiveFontSizes(theme);

export default sapphireTheme;
