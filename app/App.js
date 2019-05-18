import React, {Component} from 'react'
import { Provider } from 'react-redux'
import Store from './Store/configureStore'
import Navigation from './Navigation/Navigation'

export default class App extends Component {
  render() {
    return (
      <Provider store={Store}>
        <Navigation/>
      </Provider>
    )
  }
}