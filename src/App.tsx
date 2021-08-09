import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Admin, Movies, Home, Genres } from './pages' 
import { NavBar, Genre, Movie, AddMovie }  from './components'
function App() {
  return (
    <Router>
    <div className="container">
      <div className="row">
        <h1 className="mt-3">Go Watch a Movie!</h1>
        <hr className="mb-3" />
      </div>

      <div className="row">
        <div className="col-md-2">
          <NavBar />
        </div>
        <div className="col-md-10">
          <Switch>
            <Route path="/movies/:id" component={Movie} />
            <Route path="/movies" component={Movies} />
            <Route exact path="/genres" component={Genres}/>
            <Route path="/genre/:id" component={Genre} />

            <Route path="/admin/Add" component={AddMovie} />
            <Route path="/admin" component={Admin} />
            <Route path="/" component={Home} />
          </Switch>
        </div>
      </div>
    </div>
    </Router>

  );
}

export default App;
