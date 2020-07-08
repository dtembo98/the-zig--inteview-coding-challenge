import React from "react";
import "./App.css";
import Home from "./components/home/home.component";
//import MovieInfo from "./components/movie-info/movie-info.component";
import { Route, Switch } from "react-router-dom";
import MovieDetails from "./pages/details/movie-details.component";
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route>
            <Route exact path="/" component={Home} />
            <Route path="/movie/:movieid" component={MovieDetails} />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
