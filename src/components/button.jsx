import React from 'react'

export const Button = (atribute) => {
  return (
    <button onClick={atribute.actiune}>{atribute.numeButon}</button>
  )
}
