import React from "react";
import ReactDOM from "react-dom";
import Button from "@material-ui/core/Button";
import theme from "./theme.js";
import { ThemeProvider } from "@material-ui/core";
function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Button variant="outlined">This is a button</Button>
      </ThemeProvider>
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector("#app"));
