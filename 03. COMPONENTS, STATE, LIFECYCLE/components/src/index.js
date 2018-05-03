import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import HomePage from './components/HomePage'
import Clock from './components/Clock'
import Cars from './components/Cars'
import registerServiceWorker from './registerServiceWorker'

// let {name, ...rest } = obj

ReactDOM.render(<Cars />, document.getElementById('root'))
registerServiceWorker()
