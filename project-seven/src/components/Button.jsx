import React from 'react'

const Button = ({displayMsg}) => {
  return (
    <div>
      <input type='text' onChange={displayMsg} />
    </div>
  )
}

export default Button
