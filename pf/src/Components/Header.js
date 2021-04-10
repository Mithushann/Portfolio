
import React from 'react'

function Header() {
  return (
    <div style={{height:100, backgroundColor: '#C2CAD0'}}>
      <text><text style={{fontSize: 75, fontWeight: 1000, fontColor:'white'}} >Mithu</text> <text style={{fontSize: 80, fontWeight:2000, fontColor:'yellow'}}>.</text></text>
      
      <button style={{marginLeft: 500, justifyContent: 'center'}}> Home </button>
      <button style={{marginLeft: 100}}> About </button>
      <button style={{marginLeft: 100}}> Contact </button>
      <button style={{marginLeft: 100}}> CV </button>
      <button variant="outline-primary">Primary</button>{' '}
     
     
    </div>
  )
}

export default Header