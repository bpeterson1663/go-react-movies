import React, { useContext, useState, useEffect } from 'react'
import AuthContext from './context/auth-context'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { Admin, Movies, Home, Genres, Login, Search } from './pages'
import { NavBar, Genre, Movie, AddMovie } from './components'
import { uri } from './api'

const client = new ApolloClient({
  uri: `${uri}/v1/graphql`,
  cache: new InMemoryCache(),
})

function App() {
  const [jwt, setJwt] = useState('')

  useEffect(() => {
    const cachedToken = window.localStorage.getItem('jwt')
    if (cachedToken && jwt === '') {
      setJwt(JSON.parse(cachedToken))
    }
  }, [jwt])

  const handleJWTChange = (jwt: string) => {
    setJwt(jwt)
  }

  const logout = () => {
    window.localStorage.removeItem('jwt')
    setJwt('')
  }

  const AuthLink = (): JSX.Element => {
    const auth = useContext(AuthContext)
    let loginLink: JSX.Element
    if (auth.jwt === '') {
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
    <ApolloProvider client={client}>
      <Router>
        <AuthContext.Provider value={{ jwt, handleJWTChange }}>
          <div className="container">
            <div className="row">
              <div className="col mt-3">
                <h1 className="mt-3">Go Watch a Movie!</h1>
              </div>
              <div className="col mt-3 text-end">
                <AuthLink />
              </div>
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
                  <Route exact path="/genres" component={Genres} />
                  <Route exact path="/search" component={Search} />

                  <Route path="/genre/:id" component={Genre} />
                  <Route exact path="/login" component={Login} />
                  {jwt && (
                    <>
                      <Route path="/admin/movie/:id" exact component={AddMovie} />
                      <Route path="/admin" exact component={Admin} />
                      <Route path="/" exact component={Home} />
                    </>
                  )}
                </Switch>
              </div>
            </div>
          </div>
        </AuthContext.Provider>
      </Router>
    </ApolloProvider>
  )
}

export default App
