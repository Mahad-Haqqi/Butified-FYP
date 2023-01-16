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

import QuizCard from "./QuizCard"
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
const Form = () => {
  const [state, setState] = useState(false)
  const [type, setType] = useState(null)
  const [IE, setIE] = useState(null)
  const [NS, setNS] = useState(null)
  const [FT, setFT] = useState(null)
  const [JP, setJP] = useState(null)



  const questions = [
    {
      id: "1",
      title: "What df sdf is correct option?",
      options: [{ id: '1', text: 'Hey this is option1' }, { id: '2', text: 'Hey this is option2' },{ id: '3', text: 'Hey this is option14' }, { id: '4', text: 'Hey this is option24' }],
    }
  ]
  const onSubmit = async () => {
    let str = array
    str = str.replace(/undefined|null/g, "");
    const post = { selected: str }
    try {
      const res = await axios.post("http://localhost:8000/predict", post)
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
  let array1 = []
  const [array,setArray] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  // console.log("This qu",questions[currentQuestion].title)
  // console.log("hd", array)
  return (
    <MDBContainer style={{ height: '100vh', display:"flex",justifyContent:"center"}}>
      {questions.length != currentQuestion ?  (
        <Box style={{display:"flex", flexDirection:"column",background: "#e9f4ff",padding:"40px", width:"800px",height:"640px", justifyContent:"space-between"}}>
          <QuizCard
            key={questions[currentQuestion].id}
            media={questions[currentQuestion]?.media}
            type={questions[currentQuestion]?.type}
            text={questions[currentQuestion].title}
            options={questions[currentQuestion].options}
            setArray={setArray}
            array={array}
          />

        <Button variant="contained" 
        onClick={()=>{
          setCurrentQuestion(currentQuestion+1)
        }}>Next</Button>
        </Box>) 
        : state ? (
          <Box style={{display:"flex", flexDirection:"column",background: "#e9f4ff",padding:"40px",height:"640px", justifyContent:"center", alignItems:"center"}}>

          <Result type={type} first={IE} second={NS} third={FT} fourth={JP} />
          </Box>
        ) : (
          <Box style={{display:"flex", flexDirection:"column",background: "#e9f4ff",padding:"40px", width:"800px",height:"640px", justifyContent:"center", alignItems:"center"}}>
          <Button variant="contained" style={{width:"100px"}}  onClick={onSubmit}>Submit</Button>
          </Box>
        )
      }
    </MDBContainer>
  )
}

export default Form
