import Adress from "../Adress"
import Car from "../Car"
import "./index.css"

function User(props) {
    const { firstName, lastName, image, email, phone, address, cars } = props.user

    return (
        <div className="user">
            <img  src={image} alt="" className= "img" />
            <p className="ism-f"><p>{firstName}</p><p>{lastName}</p></p>
            <p className="tel-gmail">{phone} {email}</p>

            <div className=" address">
                {address.region && <Adress address={address.region} />}
                {address.zip && <Adress address={address.zip} />}
            </div>
            <div className="cars">
                {
                    cars.length > 0 && cars.map(function (value, index) {
                        return (
                            
                                <Car cars={value} key={index} />
                           
                        )
                    })
                }
            </div>
        </div>
    )
}

export default User