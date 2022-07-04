import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store/index";
import { BrowserRouter } from "react-router-dom";
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
// import MomentUtils from '@date-io/moment';
import DateFnsUtils from '@date-io/date-fns';
// import LuxonUtils from '@date-io/luxon';


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <React.StrictMode>
     
      <Provider store={store}>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <App />
        </MuiPickersUtilsProvider>
    
      </Provider>

      
    </React.StrictMode>
  </BrowserRouter>
);

