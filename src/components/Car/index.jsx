import "./index.css"

function Car(props) {
  const { cars } = props
  return (
    <div>
      <button className="btn">{cars}</button>
    </div>
  )
}

export default Car