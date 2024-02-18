import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#3556AB",
    },
    error: {
      main: "#AB3535",
    },
    secondary: {
      main: "#49C25D",
    },
  },
  components: {
    MuiCheckbox: {
      styleOverrides: {
        root: {
          "& .MuiFormControlLabel-root .MuiTypography-root": {
            fontSize: "0.4rem !important",
          },
        },
      },
      defaultProps: {
        size: "small",
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-input": {
            padding: "11px 13.5px",
          },
        },
      },
    },
  },
});

export default theme;
