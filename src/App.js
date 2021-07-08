import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import {allRoutes} from './router'
import AppRoute from './router/route'
function App() {
  return (
    <Router>
          <Switch>
            {allRoutes.map((route, idx) => (
              <AppRoute
              path={route.path}
              component={route.component}
              key={idx}
              exact={route.exact}
            />
            ))}

          </Switch>
        </Router>
  );
}

export default App;
