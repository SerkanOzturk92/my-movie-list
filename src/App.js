import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import { Route, Router, Switch } from 'react-router';
import { createBrowserHistory } from 'history';
import HomePage from "./pages/HomePage/HomePage";
import MovieDetailPage from "./pages/MovieDetailPage/MovieDetailPage";
import Header from "./components/Header";

const history = createBrowserHistory();

function App() {
    return (
        <Provider store={store}>
            <Router history={history}>
                <Header/>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/detail/:id" component={MovieDetailPage} />
                </Switch>
            </Router>
        </Provider>
    );
}

export default App;
