import React from 'react';


function Header() {
  return (
    <header style={headerStyle}>
      <h1>List</h1>
    </header>
  )
}

const headerStyle = {
  background: '#222',
  color: '#fff',
  textAlign: 'center',
  padding: '20px'
}

export default Header;
