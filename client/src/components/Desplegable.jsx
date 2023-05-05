import React from 'react'

function Desplegable({profesion}) {
    
  return (
    <>
    <option value="{profesion.id}">{profesion.profesion}</option>
    
    </>
  )
}

export default Desplegable