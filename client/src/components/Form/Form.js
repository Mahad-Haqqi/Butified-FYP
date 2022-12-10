import React, { useState } from "react"
import MovingComponent from "react-moving-text"
import {
  MDBBtn,
  MDBCol,
  MDBContainer,
  MDBRadio,
  MDBRow,
} from "mdb-react-ui-kit"
import { Link } from "react-router-dom"
import axios from "axios"
import { useHistory } from "react-router-dom"
import Result from "../Result/Result"
import "./form.css"
const Form = () => {
  const [state, setState] = useState(false)
  const [type, setType] = useState(null)
  const [IE, setIE] = useState(null)
  const [NS, setNS] = useState(null)
  const [FT, setFT] = useState(null)
  const [JP, setJP] = useState(null)

  const onSubmit = async () => {
    const post = { selected: array.toString() }
    try {
      const res = await axios.post("http://127.0.0.1:5000/predict", post)
      setIE(res?.data[0])
      setNS(res?.data[1])
      setFT(res?.data[2])
      setJP(res?.data[3])
      setType(res?.data[4])
      setState(true)
    } catch (e) {
      console.log(e)
    }
  }
  var array = []
  return (
    <MDBContainer>
      {state ? (
        <Result type={type} first={IE} second={NS} third={FT} fourth={JP} />
      ) : (
        <MDBRow className="justify-content-center">
          <MDBCol size="5">
            <MovingComponent
              type="bounce"
              duration="2000ms"
              delay="3s"
              direction="normal"
              timing="ease"
              iteration="infinite"
              fillMode="none"
            >
              Textual Questions
            </MovingComponent>
            <form className="questions" action="">
              <p className="fw-bold">I feel most energetic and focused:?</p>
              <MDBRadio
                name="flexRadioDefault"
                id="flexRadioDefault1"
                label="In the morning"
                value="In the morning"
                onClick={(e) => array.push(e.target.value)}
              />
              <MDBRadio
                name="flexRadioDefault"
                id="flexRadioDefault2"
                label="During the afternoon and early evening"
                value="During the afternoon and early evening"
                onClick={(e) => array.push(e.target.value)}
              />
              <MDBRadio
                name="flexRadioDefault"
                id="flexRadioDefault3"
                label="Late at night"
                value="Late at night"
                onClick={(e) => array.push(e.target.value)}
              />
            </form>
            <form className="questions" action="">
              <p className="fw-bold">When you speak to people, you tend to:</p>
              <MDBRadio
                name="flexRadioDefault"
                id="flexRadioDefault1"
                label="Have your hands clasped"
                value="Have your hands clasped"
                onClick={(e) => array.push(e.target.value)}

                // defaultChecked
              />
              <MDBRadio
                name="flexRadioDefault"
                id="flexRadioDefault2"
                label="Have one or both of your hands on your hips"
                value="Have one or both of your hands on your hips"
                onClick={(e) => array.push(e.target.value)}
              />
              <MDBRadio
                name="flexRadioDefault"
                id="flexRadioDefault3"
                label="Touch or push the person to whom you are talking"
                value="Touch or push the person to whom you are talking"
                onClick={(e) => array.push(e.target.value)}
              />
              <MDBRadio
                name="flexRadioDefault"
                id="flexRadioDefault4"
                label="Stand with your arms folded"
                value="Stand with your arms folded"
                onClick={(e) => array.push(e.target.value)}
              />
            </form>
            <form className="questions" action="">
              <p className="fw-bold">
                When you find something really funny, you usually give:
              </p>
              <MDBRadio
                name="flexRadioDefault"
                id="flexRadioDefault1"
                label="A big, appreciative laugh"
                value="A big, appreciative laugh"
                onClick={(e) => array.push(e.target.value)}
                // defaultChecked
              />
              <MDBRadio
                name="flexRadioDefault"
                id="flexRadioDefault2"
                label="A laugh, but not a loud one"
                value="A laugh, but not a loud one"
                onClick={(e) => array.push(e.target.value)}
              />
              <MDBRadio
                name="flexRadioDefault"
                id="flexRadioDefault3"
                label="A quiet chuckle"
                value="A quiet chuckle"
                onClick={(e) => array.push(e.target.value)}
              />
              <MDBRadio
                name="flexRadioDefault"
                id="flexRadioDefault4"
                label="A sheepish smile"
                value="A sheepish smile"
                onClick={(e) => array.push(e.target.value)}
              />
            </form>
            <form className="questions" action="">
              <p className="fw-bold">When you dream, you’re often:</p>
              <MDBRadio
                name="flexRadioDefault"
                id="flexRadioDefault1"
                label="Falling"
                value="Falling"
                onClick={(e) => array.push(e.target.value)}
                // defaultChecked
              />
              <MDBRadio
                name="flexRadioDefault"
                id="flexRadioDefault2"
                label="Flying or floating"
                value="Flying or floating"
                onClick={(e) => array.push(e.target.value)}
              />
              <MDBRadio
                name="flexRadioDefault"
                id="flexRadioDefault3"
                label="Fighting or struggling"
                value="Fighting or struggling"
                onClick={(e) => array.push(e.target.value)}
              />
              <MDBRadio
                name="flexRadioDefault"
                id="flexRadioDefault4"
                label="Searching for something or somebody"
                value="Searching for something or somebody"
                onClick={(e) => array.push(e.target.value)}
              />
            </form>
            <form className="questions" action="">
              <p className="fw-bold">
                When you enter a party or social gathering, you tend to:
              </p>
              <MDBRadio
                name="flexRadioDefault"
                id="flexRadioDefault1"
                label="Make a loud entrance, so that everyone notices you"
                value="Make a loud entrance, so that everyone notices you"
                onClick={(e) => array.push(e.target.value)}
                //defaultChecked
              />
              <MDBRadio
                name="flexRadioDefault"
                id="flexRadioDefault2"
                label="Make the quietest entrance, trying to stay unnoticed"
                value="Make the quietest entrance, trying to stay unnoticed"
                onClick={(e) => array.push(e.target.value)}
              />
              <MDBRadio
                name="flexRadioDefault"
                id="flexRadioDefault3"
                label="Make a quiet entrance, looking around for someone you know"
                value="Make a quiet entrance, looking around for someone you know"
                onClick={(e) => array.push(e.target.value)}
              />
            </form>
            <h1>Pictorial Questions</h1>
            <form className="" action="">
              <img
                src={require("../../img/1.png")}
                width="425"
                height="300"
                alt=""
              />
              <MDBRadio
                name="flexRadioDefault"
                id="flexRadioDefault1"
                label="claustrophobic"
                value="claustrophobic"
                onClick={(e) => array.push(e.target.value)}
                //defaultChecked
              />
              <MDBRadio
                name="flexRadioDefault"
                id="flexRadioDefault2"
                label="lonely"
                value="lonely"
                onClick={(e) => array.push(e.target.value)}
              />
              <MDBRadio
                name="flexRadioDefault"
                id="flexRadioDefault3"
                label="stagnant"
                value="stagnant"
                onClick={(e) => array.push(e.target.value)}
              />
              <MDBRadio
                name="flexRadioDefault"
                id="flexRadioDefault4"
                label="restless"
                value="restless"
                onClick={(e) => array.push(e.target.value)}
              />
            </form>
            <form className="" action="">
              <img
                src={require("../../img/books.png")}
                width="425"
                height="300"
                alt=""
              />
              <MDBRadio
                name="flexRadioDefault"
                id="flexRadioDefault1"
                label="how messy contents are"
                value="how messy contents are"
                onClick={(e) => array.push(e.target.value)}
                //defaultChecked
              />
              <MDBRadio
                name="flexRadioDefault"
                id="flexRadioDefault2"
                label="the bright colors"
                value="the bright colors"
                onClick={(e) => array.push(e.target.value)}
              />
              <MDBRadio
                name="flexRadioDefault"
                id="flexRadioDefault3"
                label="the tools used for creating"
                value="the tools used for creating"
                onClick={(e) => array.push(e.target.value)}
              />
              <MDBRadio
                name="flexRadioDefault"
                id="flexRadioDefault4"
                label="the black case"
                value="the black case"
                onClick={(e) => array.push(e.target.value)}
              />
            </form>
            <form className="" action="">
              <img
                src={require("../../img/camping.png")}
                width="425"
                height="300"
                alt=""
              />
              <MDBRadio
                name="flexRadioDefault"
                id="flexRadioDefault1"
                label="starry night sky"
                value="starry night sky"
                onClick={(e) => array.push(e.target.value)}
                // defaultChecked
              />
              <MDBRadio
                name="flexRadioDefault"
                id="flexRadioDefault2"
                label="the look of adventure"
                value="the look of adventure"
                onClick={(e) => array.push(e.target.value)}
              />
              <MDBRadio
                name="flexRadioDefault"
                id="flexRadioDefault3"
                label="everything"
                value="everything"
                onClick={(e) => array.push(e.target.value)}
              />
              <MDBRadio
                name="flexRadioDefault"
                id="flexRadioDefault4"
                label="nothing at all"
                value="nothing at all"
                onClick={(e) => array.push(e.target.value)}
              />
            </form>
            <form className="" action="">
              <img
                src={require("../../img/women in jungle.png")}
                width="425"
                height="300"
                alt=""
              />
              <MDBRadio
                name="flexRadioDefault"
                id="flexRadioDefault1"
                label="envious"
                value="envious"
                onClick={(e) => array.push(e.target.value)}
                //defaultChecked
              />
              <MDBRadio
                name="flexRadioDefault"
                id="flexRadioDefault2"
                label="happy"
                value="happy"
                onClick={(e) => array.push(e.target.value)}
              />
              <MDBRadio
                name="flexRadioDefault"
                id="flexRadioDefault3"
                label="confused"
                value="confused"
                onClick={(e) => array.push(e.target.value)}
              />
              <MDBRadio
                name="flexRadioDefault"
                id="flexRadioDefault4"
                label="directionless"
                value="directionless"
                onClick={(e) => array.push(e.target.value)}
              />
            </form>
            <form className="" action="">
              <img
                src={require("../../img/tower.png")}
                width="425"
                height="300"
                alt=""
              />
              <MDBRadio
                name="flexRadioDefault"
                id="flexRadioDefault1"
                label="anxiety"
                value="anxiety"
                onClick={(e) => array.push(e.target.value)}
                //defaultChecked
              />
              <MDBRadio
                name="flexRadioDefault"
                id="flexRadioDefault2"
                label="Happiness"
                value="Happiness"
                onClick={(e) => array.push(e.target.value)}
              />
              <MDBRadio
                name="flexRadioDefault"
                id="flexRadioDefault3"
                label="anger"
                value="anger"
                onClick={(e) => array.push(e.target.value)}
              />
              <MDBRadio
                name="flexRadioDefault"
                id="flexRadioDefault4"
                label="confusion"
                value="confusion"
                onClick={(e) => array.push(e.target.value)}
              />
            </form>
            <h1>Audio Questions</h1>
            <form className="" action="">
              <iframe
                src={"https://voca.ro/1oHX61oxk2Oa"}
                style={{
                  width: "100%",
                  height: "40%",
                }}
              />
              <MDBRadio
                name="flexRadioDefault"
                id="flexRadioDefault1"
                label="You listen them quietly."
                value="You listen them quietly."
                onClick={(e) => array.push(e.target.value)}
                //defaultChecked
              />
              <MDBRadio
                name="flexRadioDefault"
                id="flexRadioDefault2"
                label="You feel relaxed"
                value="You feel relaxed"
                onClick={(e) => array.push(e.target.value)}
              />
              <MDBRadio
                name="flexRadioDefault"
                id="flexRadioDefault3"
                label="You get emotional"
                value="You get emotional"
                onClick={(e) => array.push(e.target.value)}
              />
              <MDBRadio
                name="flexRadioDefault"
                id="flexRadioDefault4"
                label="You start vibing on it"
                value="You start vibing on it"
                onClick={(e) => array.push(e.target.value)}
              />
            </form>
            <form className="" action="">
              <iframe
                src={"https://voca.ro/1eGOGK8ZA7Hl"}
                style={{
                  width: "100%",
                  height: "40%",
                }}
              />
              <MDBRadio
                name="flexRadioDefault"
                id="flexRadioDefault1"
                label="You think it will mess up your ears."
                value="You think it will mess up your ears."
                onClick={(e) => array.push(e.target.value)}
                //defaultChecked
              />
              <MDBRadio
                name="flexRadioDefault"
                id="flexRadioDefault2"
                label="You feel hyped up"
                value="You feel hyped up"
                onClick={(e) => array.push(e.target.value)}
              />
              <MDBRadio
                name="flexRadioDefault"
                id="flexRadioDefault3"
                label="You start dancing on it"
                value="You start dancing on it"
                onClick={(e) => array.push(e.target.value)}
              />
              <MDBRadio
                name="flexRadioDefault"
                id="flexRadioDefault4"
                label="You think this is cringe"
                value="You think this is cringe"
                onClick={(e) => array.push(e.target.value)}
              />
            </form>
            <form className="" action="">
              <iframe
                src={"https://voca.ro/1bW8bzSP1BRb"}
                style={{
                  width: "100%",
                  height: "40%",
                }}
              />
              <MDBRadio
                name="flexRadioDefault"
                id="flexRadioDefault1"
                label="This song is pretty good."
                value="This song is pretty good."
                onClick={(e) => array.push(e.target.value)}
                //defaultChecked
              />
              <MDBRadio
                name="flexRadioDefault"
                id="flexRadioDefault2"
                label="I don’t like this song"
                value="I don’t like this song"
                onClick={(e) => array.push(e.target.value)}
              />
              <MDBRadio
                name="flexRadioDefault"
                id="flexRadioDefault3"
                label="I will put this song on repeat"
                value="I will put this song on repeat"
                onClick={(e) => array.push(e.target.value)}
              />
              <MDBRadio
                name="flexRadioDefault"
                id="flexRadioDefault4"
                label="I think this song is weird"
                value="I think this song is weird"
                onClick={(e) => array.push(e.target.value)}
              />
            </form>
            <form className="" action="">
              <iframe
                src={"https://voca.ro/12R2MN9U3b7x"}
                style={{
                  width: "100%",
                  height: "40%",
                }}
              />
              <MDBRadio
                name="flexRadioDefault"
                id="flexRadioDefault1"
                label="feels annoying"
                value="feels annoying"
                onClick={(e) => array.push(e.target.value)}
                //defaultChecked
              />
              <MDBRadio
                name="flexRadioDefault"
                id="flexRadioDefault2"
                label="think this music is soothing"
                value="think this music is soothing"
                onClick={(e) => array.push(e.target.value)}
              />
              <MDBRadio
                name="flexRadioDefault"
                id="flexRadioDefault3"
                label="You start dancing on it"
                value="You start dancing on it"
                onClick={(e) => array.push(e.target.value)}
              />
              <MDBRadio
                name="flexRadioDefault"
                id="flexRadioDefault4"
                label="You feel hyped up"
                value="You feel hyped up"
                onClick={(e) => array.push(e.target.value)}
              />
            </form>
            <form className="" action="">
              <iframe
                src={"https://voca.ro/1fYy1fkVBnZM"}
                style={{
                  width: "100%",
                  height: "40%",
                }}
              />
              <MDBRadio
                name="flexRadioDefault"
                id="flexRadioDefault1"
                label="You feel relaxed"
                value="You feel relaxed"
                onClick={(e) => array.push(e.target.value)}
                //defaultChecked
              />
              <MDBRadio
                name="flexRadioDefault"
                id="flexRadioDefault2"
                label="You get emotional"
                value="You get emotional"
                onClick={(e) => array.push(e.target.value)}
              />
              <MDBRadio
                name="flexRadioDefault"
                id="flexRadioDefault3"
                label="I don’t like this song"
                value="I don’t like this song"
                onClick={(e) => array.push(e.target.value)}
              />
              <MDBRadio
                name="flexRadioDefault"
                id="flexRadioDefault4"
                label="You think this is cringe"
                value="You think this is cringe"
                onClick={(e) => array.push(e.target.value)}
              />
            </form>
            <div className="text-white">
              <button className="btn btn-success" onClick={onSubmit}>
                Submit
              </button>
            </div>
          </MDBCol>
        </MDBRow>
      )}
    </MDBContainer>
  )
}

export default Form
