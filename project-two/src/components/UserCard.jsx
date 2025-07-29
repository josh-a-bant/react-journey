// import React from 'react'

import './UserCard.css'

const UserCard = (props) => {
  return (
    <div className='card-container' style={props.style}>
      <h1 className='user-title'>{props.name}</h1>
      <img id='user-img' src={props.image} alt="jashobanta's img" />
      <p className="user-details">{props.desc}</p>
    </div>
  )
}

export default UserCard
