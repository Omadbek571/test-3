import "./index.css"

function Adress(props) {
  const { address, } = props;

  return (
    <div>
      <p className="adress">{address}</p>
    </div>
  );
}

export default Adress;