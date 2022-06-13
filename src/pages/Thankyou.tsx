import '../styles/bookings.css'

const Thankyou = () => {
    return (
        <div>
            <div className='thanks-img'>
                <img src={require("../images/thankyou.webp")} />
            </div>
            <div className="thanks">

                <p>Thank you for placing an order with us</p>
                <p>You should receive an email of your order details</p>
            </div>
            <br />
            <br />
        </div>
    )
}
export default Thankyou