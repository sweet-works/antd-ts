import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  // HashRouter as Router,
  Route,
  Switch,
  Redirect
  // Link
} from 'react-router-dom';
import Routers from '../router';
import SiderDemo from './common/Layout';

class App extends Component<any> {
  render() {
    return (
      <div className="App" >
        <Router>
          <SiderDemo>
            <Switch>
              <Redirect exact from="/" to="/home" />
              {
                Routers.map(route => {
                  const {
                    id,
                    exact,
                    path,
                    ...rest
                  } = route;
                  return (
                    <Route
                      key={id}
                      exact={exact}
                      path={path}
                      render={props => {
                        return (
                          <route.component
                            {...this.props}
                            {...props}
                            {...rest}
                          />
                        );
                      }}
                    />
                  );
                })
              }
            </Switch>
          </SiderDemo>
        </Router>
      </div>
    );
  }
};

export default App;
