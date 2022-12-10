import React from "react"
import chair from "../../assets/images/chair.png"
import bannerBG from "../../assets/images/bg.png"
import Primarybutton from "../Shared/Primarybutton"
const Banner = () => {
  return (
    <div
      style={{
        background: `url(${bannerBG})`,
        display: "flex",
      }}
      className="hero min-h-screen"
    >
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={chair} className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
          <p className="py-6">
            "Dreams are extremely important. You can't do it unless you imagine
            it."
          </p>
          <Primarybutton>Get Started</Primarybutton>
        </div>
      </div>
    </div>
  )
}

export default Banner
