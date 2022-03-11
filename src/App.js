
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/Home"
import Navbar from "./Navbar";

function App() {
  return (
    
    <Router>
    <div>
      <Navbar />

      <div id="content">
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </div>
    </div>
  </Router>
  );
}

export default App;
