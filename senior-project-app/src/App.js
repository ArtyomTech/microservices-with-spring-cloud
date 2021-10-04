// React
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Bootstrap
import { Container, Row, Col } from "react-bootstrap";

// Components
import NavigationBar from './components/NavigationBar';
import UsersList from './components/UsersList';
import User from './components/User';
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <NavigationBar />

        <Container>
          <Row>
            <Col lg={12} className="mt-lg-5">
              <Switch>
                <Route path="/home" exact component={Home} />
                <Route path="/users" exact component={UsersList} />
                <Route path="/register" exact component={Register} />
                <Route path="/login" exact component={Login} />
                <Route path="/users/:userId" exact component={User} />
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
