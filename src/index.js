import React from 'react'
import ReactDOM from 'react-dom'

// import component
import AppHeader from './AppHeader'
import AppFooter from './AppFooter'
import AppContent from './AppContent'

// import style
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'

import 'bootstrap/dist/js/bootstrap.bundle.min.js'

const App = () => {
  const myProps = {
    title: 'My Cool App!',
    subject: 'My subject',
    favoriteColor: 'red'
  }
  return (
    <div className='app'>
        <AppHeader {...myProps} />
        <AppContent />
        <AppFooter />
    </div>
  )
}

export default App

ReactDOM.render(
    <App />,document.getElementById('root')
)