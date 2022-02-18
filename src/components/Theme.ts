import { createTheme } from "@mui/material/styles";

const backgroundColor = "#283D3B";
const primaryColor = "#EDDDD4";
const secondaryColor = "#197278";
const errorColor = "#C44536";

const customTheme = createTheme({
  palette: {
    background: {
      default: backgroundColor,
    },
    primary: {
      main: primaryColor,
    },
    secondary: {
      main: secondaryColor,
    },
    error: {
      main: errorColor,
    },
  },
});

export default customTheme;
