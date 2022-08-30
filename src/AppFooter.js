import React from 'react'

const AppFooter = () => {
  const currentYear = new Date().getFullYear()
  return (
    <>
      <hr />
      <p>Copyright &copy; 2020 - {currentYear} Furuya Ltd.</p>
    </>
  )
}

export default AppFooter