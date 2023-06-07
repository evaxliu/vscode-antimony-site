import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";
import { I18nextProvider } from "react-i18next";
import "antd/dist/antd.css";

import Router from "./router";

const App = () => (
  <BrowserRouter>
    <Router />
  </BrowserRouter>
);

ReactDOM.render(<App />, document.getElementById("root"));
