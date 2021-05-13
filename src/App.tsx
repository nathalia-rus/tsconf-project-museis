import React from 'react'
import './App.css'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import Home from './components/pages/home'
import God from './components/pages/god'

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Router>
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/god" exact component={God} />
                    </Switch>
                </Router>
            </div>
        )
    }
}

export default App
