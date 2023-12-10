/*
* Filename: sophisticated_app.js
* Content: Example of a sophisticated and complex JavaScript application
*/

// Import necessary libraries
import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

// Define global variables
const API_BASE_URL = 'https://api.example.com/';
let loggedInUser = null;

// Define helper functions
const getToken = async () => {
  try {
    const response = await axios.post(API_BASE_URL + 'auth', { username: 'admin', password: 'password' });
    return response.data.token;
  } catch (error) {
    console.error('Error in getToken:', error);
  }
};

const getUserData = async (token) => {
  try {
    const response = await axios.get(API_BASE_URL + 'user', { headers: { 'Authorization': 'Bearer ' + token } });
    return response.data;
  } catch (error) {
    console.error('Error in getUserData:', error);
  }
};

// Define React components
const Home = () => <h1>Welcome to our sophisticated app!</h1>;

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
    };
  }

  async componentDidMount() {
    const token = await getToken();
    const userData = await getUserData(token);
    this.setState({ user: userData });
  }

  render() {
    const { user } = this.state;

    if (!user) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <h1>User Profile</h1>
        <div>
          <strong>Username:</strong> {user.username}
        </div>
        <div>
          <strong>Email:</strong> {user.email}
        </div>
        {/* Additional profile information */}
      </div>
    );
  }
}

// Define root component
const App = () => (
  <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/profile" component={Profile} />
      </Switch>
    </div>
  </Router>
);

// Render the app
ReactDOM.render(<App />, document.getElementById('root'));
