import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Navbar, Nav, Container,
} from 'react-bootstrap';
import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';

import Journal from './Journal'
import Category from './Category'

function App() {
  return (
    <Router>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand><Link to="/">Money Journey</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link><Link to="/journal">Journal</Link></Nav.Link>
            <Nav.Link><Link to="/category">Category</Link></Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link eventKey={2} href="#memes">
              Sign Out
      </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Switch>
        <Route path="/journal">
          <Journal />
        </Route>
        <Route path="/category">
          <Category />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

function Home() {
  return (
    <Container>
      <br />
      <h1>Welcome to Money Journey Application</h1><br />
      <h2>Apitsara Choppradit ID: 5710497</h2>
    </Container>
  )
}
export default App;
