import React from "react"
import treatment from "../../assets/images/treatment.png"
import Primarybutton from "../Shared/Primarybutton"
const DentalCare = () => {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <img src={treatment} className="max-w-sm rounded-lg shadow-2xl" />
        <div className="lg:px-28">
          <h1 className="text-5xl font-bold">Predict Your Career</h1>
          <p className="py-6">
            "Goals help focus you on areas in both your personal and
            professional life that are important and meaningful, rather than
            being guided by what other people want you to be, do, or
            accomplish."
          </p>
          <Primarybutton>Get Started</Primarybutton>
        </div>
      </div>
    </div>
  )
}

export default DentalCare
