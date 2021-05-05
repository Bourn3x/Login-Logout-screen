import { Route, BrowserRouter as Router, Switch, Redirect } from "react-router-dom"
import LoginPage from "./containers/LoginPage"
import DashboardPage from "./containers/DashboardPage"

const isAuthenticated = localStorage.getItem('authenticationToken')
const BlockedAfterLoggedInRoute = ({ component: Component, ...rest }) => {
  return (
    // Show the component only when the user is logged in
    // Otherwise, redirect the user to /login page
    <Route {...rest} render={props => (
      !isAuthenticated
        ? <Component {...props} />
        : <Redirect to="/home" />
    )} />
  );
};

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    // Show the component only when the user is logged in
    // Otherwise, redirect the user to /login page
    <Route {...rest} render={props => (
      isAuthenticated
        ? <Component {...props} />
        : <Redirect to="/" />
    )} />
  );
};

function App() {
  return (
    <Router>
      <Switch>
        <BlockedAfterLoggedInRoute exact path="/" component={LoginPage} />
        <PrivateRoute exact path="/home" component={DashboardPage} />
        <Route render={props => <Redirect to="/"/>} />
      </Switch>
    </Router>
  )
}

export default App
