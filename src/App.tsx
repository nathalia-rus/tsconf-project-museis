import React from 'react'
import './App.css'

import Home from './components/pages/home'
import { History } from 'history'

import { ConnectedRouter } from 'connected-react-router'

import CategoryPage from './components/pages/category'
import Item from './components/pages/item'
import { Route, Switch } from 'react-router-dom'
import MainMenuDesktop from './components/templates/menus/mainMenuDesktop'
import MainMenuMobile from './components/templates/menus/mainMenuMobile'
import Questionnaire from './components/pages/questionnaire'
import ScrollToTop from './components/templates/transitions/scrollToTop'

interface AppProps {
    history: History
}

class App extends React.PureComponent<AppProps> {
    render() {
        const { history } = this.props

        return (
            <div className="App">
                <ConnectedRouter history={history}>
                    <MainMenuMobile />

                    <MainMenuDesktop />
                    <ScrollToTop>
                        <Switch>
                            <Route path="/" exact component={Home} />
                            <Route
                                path="/questionnaire"
                                exact
                                component={Questionnaire}
                            />
                            <Route
                                path="/:categoryid"
                                exact
                                component={CategoryPage}
                            />

                            <Route
                                path="/:categoryid/:uid"
                                exact
                                component={Item}
                            />
                        </Switch>
                    </ScrollToTop>
                </ConnectedRouter>
            </div>
        )
    }
}

export default App
