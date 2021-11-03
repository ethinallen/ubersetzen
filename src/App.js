import { Router, Switch, Route } from 'react-router-dom';
import Ubersetzen from "./components/Ubersetzen/Ubersetzen.js"
import { createBrowserHistory } from 'history';

import 'semantic-ui-css/semantic.min.css'

import './App.css';

const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Ubersetzen} />
      </Switch>
    </Router>
  );
}

export default App;
