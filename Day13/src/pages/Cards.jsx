const cardStyle={
    backgroundColor:"yellow",
}
const Cards = ({title,text}) => {
  return (
    <div style={cardStyle}> 
      <h3>{title}</h3>
      <label>{text}</label>
    </div>
  )
}
export default Cards;

