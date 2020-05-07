import React, {Component} from 'react';
import './App.css';

class App extends Component {

    state = {
        data: null
    };

    componentDidMount() {
        this.callBackendAPI();
    }
    // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
    callBackendAPI = async () => {
        try {
            const response = await fetch('/express_backend');
            const body = await response.json();
            this.setState({ data: body.express });
        } catch(err) {
            throw Error(err)
        }
        return;
    };

  render () {
      return (
        <div className="App">
          <header className="App-header">
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </div>
      );
  }
}

export default App;
