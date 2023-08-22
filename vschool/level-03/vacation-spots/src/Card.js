export default function Card(props) {
  // console.log(props)
  let vacationPrice
  if (props.price <= 500) {
    vacationPrice = "$"
  } else if (props.price > 500 && props.price < 1000) {
    vacationPrice = "$$"
  } else if (props.price >= 1000) {
    vacationPrice = "$$$"
  }

  return (
    <div className="vacation--container">
      <img src={props.coverImg} alt="vacation-view" className="vacation--img"/>
      <div className="vacation--info">
        <h1>{props.place}</h1>
          <div className="vacation--price">
            {
              vacationPrice && 
              <div className="dollar">{vacationPrice}</div>
            }
            <p>{props.price}</p>
          </div>
        <h2>{props.timeToGo}</h2>
      </div>
    </div>
  )
}