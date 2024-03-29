import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./Pages/App/App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import  {store}  from "./Store";
import "./Firebase";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
