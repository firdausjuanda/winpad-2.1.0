import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
function App() {
  return (
    <div>
      <Router>
      <Switch>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>  
    </div>
  );
}

export default App;