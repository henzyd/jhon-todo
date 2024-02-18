import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ThemeProvider } from "@emotion/react";
import AppLoader from "./components/loaders/app-loader.tsx";
import theme from "./theme.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Suspense fallback={<AppLoader />}>
        <App />
      </Suspense>
    </ThemeProvider>
  </React.StrictMode>
);
