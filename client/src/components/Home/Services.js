import React from "react"
import Service from "./Service"
import fluoride from "../../assets/images/fluoride.png"
import cavity from "../../assets/images/cavity.png"
import whitening from "../../assets/images/whitening.png"

const Services = () => {
  const services = [
    {
      _id: 1,
      name: "Predict personality",
      description:
        "“If I am what I have and if I lose what I have, who then am I?” ",
      img: fluoride,
    },
    {
      _id: 2,
      name: "Textual Questions",
      description:
        "Asking, 'Why?' is the key to everything. Question always. Answer the why.",
      img: cavity,
    },
    {
      _id: 3,
      name: "Secure",
      description:
        "Do not be too timid and squeamish about your actions. All life is an experiment.",
      img: whitening,
    },
  ]
  return (
    <div className="my-28">
      <div className="text-center">
        <h3 className="text-primary  text-xl font-bold uppercase">
          Our Services
        </h3>
        <h2 className="text-4xl">Services We Provide</h2>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((service) => (
          <Service key={service._id} service={service}></Service>
        ))}
      </div>
    </div>
  )
}

export default Services
