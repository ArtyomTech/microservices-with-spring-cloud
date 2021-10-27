// React
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { useSelector } from "react-redux";

// Bootstrap
import { Container, Row, Col } from "react-bootstrap";

// Components
import NavigationBar from './components/NavigationBar';
import UsersList from './components/UsersList';
import User from './components/User';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import Welcome from './components/Welcome';

function PrivateRoute({ component: Component, authed, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => authed === true
        ? <Component {...props} />
        : <Redirect to={{ pathname: '/login' }} />}
    />
  )
}

function App() {
  const auth = useSelector((state) => state.auth);
  console.log('app-auth', auth);

  const authToken = localStorage.getItem("jwtToken");
  console.log('authToken', authToken);

  return (
    <div className="App">
      <Router>
        <NavigationBar />

        <Container>
          <Row>
            <Col lg={12} className="mt-lg-5">
              <Switch>
                <Route path="/" exact component={Welcome} />
                <Route path="/home" exact component={Home} />
                <Route path="/register" exact component={Register} />
                <Route path="/login" exact component={Login} />
                <Route
                  path="/logout"
                  exact
                  component={(props) => (<Login message="User Logged Out Successfully." {...props} />)}
                />

                {/* Authenticated paths */}
                <PrivateRoute authed={auth.isLoggedIn} path="/users" exact component={UsersList} />
                <PrivateRoute authed={auth.isLoggedIn} path="/users/:userId" exact component={User} />

                <Route>404 Not Found!</Route>
              </Switch>
            </Col>
          </Row>
        </Container>
      </Router>
    </div>
  );
}

export default App;
