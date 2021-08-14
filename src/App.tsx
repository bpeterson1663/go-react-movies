import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { Admin, Movies, Home, Genres, Login } from './pages'
import { NavBar, Genre, Movie, AddMovie } from './components'
function App() {
  const [jwt, setJwt] = useState('')

  const handleJWTChange = (jwt: string) => {
    setJwt(jwt)
  }

  const logout = () => {
    setJwt('')
  }

  const AuthLink = ({ jwt }: { jwt: string }): JSX.Element => {
    let loginLink: JSX.Element
    if (jwt === '') {
      loginLink = <Link to="/login">Login</Link>
    } else {
      loginLink = (
        <Link to="/logout" onClick={logout}>
          Logout
        </Link>
      )
    }
    return loginLink
  }

  return (
    <Router>
      <div className="container">
        <div className="row">
          <div className="col mt-3">
            <h1 className="mt-3">Go Watch a Movie!</h1>
          </div>
          <div className="col mt-3 text-end">
            <AuthLink jwt={jwt} />
          </div>
          <hr className="mb-3" />
        </div>

        <div className="row">
          <div className="col-md-2">
            <NavBar jwt={jwt} />
          </div>
          <div className="col-md-10">
            <Switch>
              <Route path="/movies/:id" component={Movie} />
              <Route path="/movies" component={Movies} />
              <Route exact path="/genres" component={Genres} />
              <Route path="/genre/:id" component={Genre} />
              <Route
                exact
                path="/login"
                component={(props: JSX.IntrinsicAttributes) => <Login {...props} handleJWTChange={handleJWTChange} />}
              />
              <Route path="/admin/movie/:id" component={AddMovie} />
              <Route path="/admin" component={Admin} />
              <Route path="/" component={Home} />
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  )
}

export default App
