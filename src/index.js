import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {createStore} from "redux";
import {Provider} from "react-redux";
import Reducer from "./Common/redux/Reducer";

const store = createStore(
    Reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Provider store={store}>
        <App/>
    </Provider>
);


