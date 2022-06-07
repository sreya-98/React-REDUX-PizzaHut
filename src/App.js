import React, {Fragment} from 'react';
import './App.css';
import PizzaHut from "./components/PizzaHut";
import {Provider} from "react-redux";
import {store} from "./redux/store";

let App = () => {
    return (
        <Fragment>
            <nav className="navbar navbar-dark bg-primary navbar-expand-sm">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a href="/" className="nav-link">Pizza Hut with React & REDUX</a>
                    </li>
                </ul>
            </nav>
            <Provider store={store}>
                <PizzaHut/>
            </Provider>
        </Fragment>
    );
}

export default App;
