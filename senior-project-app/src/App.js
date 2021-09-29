// React
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// Components
import Navbar from './components/Navbar';
import UsersList from './components/UsersList';

function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <Navbar />
        </header>

        <Switch>
          <Route path="/" exact component={UsersList} />
          <Route>404 Not Found!</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
