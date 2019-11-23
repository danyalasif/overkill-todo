import React from 'react'

import Layout from './components/Layout'
import { Provider } from 'react-redux'
import {store} from "./store"


// import './App.css'

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Layout />
    </Provider>
  )
}

export default App
