const Card = (props) => {
  return (
    <div>
      <input type="text" onChange={(e) => props.setText(e.target.value)}/>
      <p>inside child component : {props.text}</p>
    </div>
  )
}

export default Card
