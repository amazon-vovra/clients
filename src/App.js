import logo from "./logo.svg";
import "./App.css";
import Header from "./components/layout/Header";
import Landing from "./components/layout/Landing";
import Footer from "./components/layout/Footer";
import Register from "./components/auth/Register";
import { Provider } from "react-redux";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch,
} from "react-router-dom";
import routers from "./components/routes/Routers";
// BroswerRouter as Router : it is a react component which is responsible for handling the routing
// for your entire application.
// Route  : it is used to handle the routing for a specific component
// NavLink : we will use it for handling Navigation part in UI(Header).
// Link : we will use it for handling Navigation part in UI (anywhere).
import store from "./redux/store";
function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path="/" component={Landing}></Route>
            <Route component={routers} />
          </Switch>
          <Footer />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
