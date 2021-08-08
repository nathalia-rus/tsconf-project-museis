import React from 'react'
import './App.css'
import { Route, BrowserRouter as Switch } from 'react-router-dom'
import Home from './components/pages/home'
import { History } from 'history'

import { ConnectedRouter } from 'connected-react-router'
import MainMenuDesktop from './components/templates/menus/main/mainMenuDesktop'

interface AppProps {
    history: History
}

class App extends React.Component<AppProps> {
    render() {
        const { history } = this.props

        return (
            <div className="App">
                <ConnectedRouter history={history}>
                    <MainMenuDesktop />
                    <Switch>
                        <Route path="/" exact component={Home} />
                    </Switch>
                </ConnectedRouter>
            </div>
        )
    }
}

export default App
