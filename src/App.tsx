import React from 'react';
import { BrowserRouter as Router, Switch, Route, useParams} from 'react-router-dom'
import { Admin, Movies, Home, Categories } from './pages' 
import { NavBar, Category}  from './components'
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
            <Route exact path="/by-category" component={Categories}/>
            <Route exact path="/by-category/drama" render={props=> <Category {...props} title={`Drama`} />} />
            <Route exact path="/by-category/comedy" render={props=> <Category {...props} title={`Comedy`} />} />

            <Route path="/admin" component={Admin} />
            <Route path="/" component={Home} />
          </Switch>
        </div>
      </div>
    </div>
    </Router>

  );
}

interface MovieT {
  id: string
}
function Movie() {
  const { id } = useParams<MovieT>()
  return <h2>Movie ID: {id} </h2>
}

export default App;
