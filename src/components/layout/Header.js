import React from 'react';


function Header() {
  return (
    <header style={headerStyle}>
      <h1>LIST</h1>
      <small style={sTextStyle}>of things to do..</small>
    </header>
  )
}

const headerStyle = {
  fontSize: '40px',
  background: '#222',
  color: '#fff',
  textAlign: 'center',
  padding: '20px'
}

const sTextStyle = {
  fontSize: '20px',
}

export default Header;
