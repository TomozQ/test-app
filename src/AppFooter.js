import React from 'react'

import './AppFooter.css'

const AppFooter = () => {
  const currentYear = new Date().getFullYear()
  return (
    <>
      <hr />
      <p className='footer'>Copyright &copy; 2020 - {currentYear} Furuya Ltd.</p>
    </>
  )
}

export default AppFooter