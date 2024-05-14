import "./ShowCount.css";

const ShowCount = (props) => {
  return (
    <div>
      <h2>Has hecho click {props.count} {props.count === 1 ? "vez" : "veces"}</h2>
    </div>
  )
}

export default ShowCount