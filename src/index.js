import React from 'react'
import ReactDOM from 'react-dom'

// import component
import AppFooter from './AppFooter'

// import style
import './index.css'

const App = () => {
  return (
    <div className='app'>
      <div>
        <h1>Hello world</h1>
      </div>
      <AppFooter />
    </div>
  )
}

export default App

ReactDOM.render(
    <App />,document.getElementById('root')
)