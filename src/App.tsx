import React from 'react'

import Layout from './components/Layout'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './store/reducers'

const store = createStore(rootReducer)

// import './App.css'

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Layout />
    </Provider>
  )
}

export default App
