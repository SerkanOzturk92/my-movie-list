import React, {Component} from 'react';
import {Route, Switch} from "react-router-dom";
import {Routes} from './Routes';
import Header from "./components/Header";

const routeComponents = Routes.map((route) => {
    return <Route path={route.path} component={route.component} key={'route' + route.path}/>;
});

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header/>
                <Switch>
                    {routeComponents}
                </Switch>
            </div>
        );
    }
}

export default App;