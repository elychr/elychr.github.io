import React from 'react'
import { render } from 'react-dom'
import { createMuiTheme, ThemeProvider } from '@material-ui/core'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import * as serviceWorker from './components/serviceWorker'
import Sidebar from './components/sidebar'
import { mapRoutes } from './functions';
import routes from './routes';
import { lightBlue } from '@material-ui/core/colors';
import './css/style.css'
import Home from './home';

render(
  <React.StrictMode>
    <ThemeProvider theme={createMuiTheme({
      status: {
        danger: lightBlue[500],
      },
    })} >
      <Router>
          <header className="App-header">
            <h1>Welcome!</h1>
          </header>

          <Sidebar routes={routes}>
            <Switch>
              {mapRoutes(routes)}
              <Route path={'/'} render={props => <Home />} />
            </Switch>
          </Sidebar>

          <footer className="App-header"></footer>
      </Router>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();