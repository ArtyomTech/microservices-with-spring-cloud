// React
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

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

function App() {
  const authToken = localStorage.getItem("jwtToken");
  const authPaths = (
    <>
      <Route path="/users" exact component={UsersList} />
      <Route path="/users/:userId" exact component={User} />
    </>
  )
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
                  component={() => (<Login message="User Logged Out Successfully." />)}
                />

                {/* Authenticated paths */}
                {authToken ?
                  authPaths
                  :
                  <Route>No access!</Route>
                }

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
