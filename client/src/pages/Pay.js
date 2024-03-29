import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useHistory } from "react-router-dom";
import StripeCheckout from 'react-stripe-checkout';

const KEY = "pk_test_51LW00pLplrJ17jtVYzDY9T3I6Yba97b7bPWN64ZDowKQulVe6tPUIALtCNR5d4Hd93l3fOOtr7E2UiPOqLwLdenq00sZtcp41V"


const Pay = () => {

    const [stripeToken, setStripeToken] = useState(null)

    const history = useHistory()

    useEffect(() => {
        const makePayment = async () => {
            try {
                const res = await axios.post("http://localhost:5000/api/checkout/payment", {
                    tokenId: stripeToken.id,
                    amount: 3000
                })
                history.push("/yes")
                console.log(res)
            } catch (err) {
                console.log(err)
            }
        }
        stripeToken && makePayment()
    }, [stripeToken, history])

    const onToken = (token) => {
        console.log(token)
        setStripeToken(token)
    }

    return (
        <div
            style={{
                height: "100vh",
                display: 'flex',
                alignItems: "center",
                justifyContent: "center"
            }}>
            {stripeToken ? (<h3>Successfully paid..</h3>) : (

                <StripeCheckout
                    name="KhaiShop" // the pop-in header title
                    description="Payment $30" // the pop-in header subtitle
                    image="https://www.vidhub.co/assets/logos/vidhub-icon-2e5c629f64ced5598a56387d4e3d0c7c.png" // the pop-in header image (default none)
                    stripeKey={KEY}
                    token={onToken}
                    amount={3000}
                    billingAddress
                    shippingAddress

                >
                    <button
                        style={{
                            border: "none",
                            width: "120",
                            borderRadius: 5,
                            padding: "20px",
                            background: "black",
                            color: "white",
                            fontWeight: "600",
                            cursor: "pointer"
                        }}>
                        Pay Now
                    </button>
                </StripeCheckout>
            )}
        </div>
    )
}

export default Pay