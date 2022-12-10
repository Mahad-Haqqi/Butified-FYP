import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import React from "react"
import { useQuery } from "react-query"
import { useParams } from "react-router-dom"
import Loading from "../Shared/Loading"
// import CheckoutForm from "./CheckoutForm"

const Payment = () => {
  return (
    <div>
      <div class="card w-50 max-w-md bg-base-100 shadow-xl my-12">
        <div class="card-body">
          <p className="text-success font-bold">Hello,</p>
          <h2 class="card-title">Please Pay for </h2>
          <p>
            Your Appointment:
            <span className="text-orange-700"></span>
            <span className="text-orange-700"></span>
          </p>
          <p>BookingId:227886</p>
          <p>Please pay: 50$</p>
          <p>NOTE:Please Pay This Ammount on Clinic Reception</p>
        </div>
        <button className="btn btn success">Thankyou</button>
      </div>
      <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
        {/* <div class="card-body">
          <Elements stripe={stripePromise}>
            <CheckoutForm appointment={appointment} />
          </Elements>
        </div> */}
      </div>
    </div>
  )
}

export default Payment
