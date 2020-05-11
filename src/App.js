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
            console.log(body);
            this.setState({ data: body.express });
        } catch(err) {
            throw Error(err)
        }
        return;
    };

  render () {
      return (
        <div className="App">
          <Bannerimg />


          <header className="App-header">
                  <h1>John Muir Trail Planning</h1>
                  <h2> Stuff for the website </h2>
                  <h3> More stuff </h3>
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
