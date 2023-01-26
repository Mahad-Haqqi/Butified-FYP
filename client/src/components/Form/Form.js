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
      title: "I feel most energetic and focused:",
      options: [{ id: '1', text: 'In the morning' }, { id: '2', text: 'During the afternoon and early evening' },{ id: '3', text: 'Late at night' }, { id: '4', text: 'Never' }],
    },
    {
      id: "2",
      title: "When you speak to people, you tend to:",
      options: [{ id: '1', text: 'Have your hands clasped' }, { id: '2', text: 'Have one or both of your hands on your hips' },{ id: '3', text: 'touch or push the person to whom you are talking' }, { id: '4', text: 'Stand with your arms folded' }],
    },
    {
      id: "3",
      title: "When you find something really funny, you usually give:",
      options: [{ id: '1', text: 'A sheepish smile' }, { id: '2', text: 'A quiet chuckle' },{ id: '3', text: 'A laugh, but not a loud one' }, { id: '4', text: 'A big, appreciative laugh' }],
    },
    {
      id: "4",
      title: "When you dream, you’re often:",
      options: [{ id: '1', text: 'Flying or floating' }, { id: '2', text: 'Searching for something or somebody' },{ id: '3', text: 'Fighting or struggling' }, { id: '4', text: 'Falling' }],
    },
    {
      id: "5",
      title: "When you enter a party or social gathering, you tend to:",
      options: [{ id: '1', text: 'Make the quietest entrance, trying to stay unnoticed' }, { id: '2', text: 'Make a quiet entrance, looking around for someone you know' },{ id: '3', text: 'Make a loud entrance, so that everyone notices you' }, { id: '4', text: 'Not interested in going to parties' }],
    },
    {
      id: "6",
      media: "https://res.cloudinary.com/dfxpd800j/image/upload/v1674751262/camping_w3kvfj.png",
      type:"image",
      title: "What is the first thing you observed?",
      options: [{ id: '1', text: 'starry night sky' }, { id: '2', text: 'the look of adventure' },{ id: '3', text: 'everything' }, { id: '4', text: 'nothing at all' }],
    },
    {
      id: "7",
      media: "https://res.cloudinary.com/dfxpd800j/image/upload/v1674751267/tower_eimjdt.png",
      type:"image",
      title: "What are your thoughts about this picture?",
      options: [{ id: '1', text: 'anxiety' }, { id: '2', text: 'Happiness' },{ id: '3', text: 'anger' }, { id: '4', text: 'confusion' }],
    },
    {
      id: "8",
      media: "https://res.cloudinary.com/dfxpd800j/image/upload/v1674751261/women_in_jungle_xdbizt.png",
      type:"image",
      title: "What are your thoughts about this picture?",
      options: [{ id: '1', text: 'envious' }, { id: '2', text: 'confused' },{ id: '3', text: 'happy' }, { id: '4', text: 'directionless' }],
    },
    {
      id: "9",
      media: "https://res.cloudinary.com/dfxpd800j/image/upload/v1674751262/1_cek1t5.png",
      type:"image",
      title: "What are your thoughts about this picture?",
      options: [{ id: '1', text: 'claustrophobic' }, { id: '2', text: 'lonely' },{ id: '3', text: 'stagnant' }, { id: '4', text: 'restless' }],
    },
    {
      id: "10",
      media: "https://res.cloudinary.com/dfxpd800j/image/upload/v1674751262/books_uh1pzt.png",
      type:"image",
      title: "What caught your attention?",
      options: [{ id: '1', text: 'how messy contents are' }, { id: '2', text: 'the bright colors' },{ id: '3', text: 'the tools used for creating' }, { id: '4', text: 'the black case' }],
    },
    {
      id: "11",
      title: "What are your thoughts about this music??",
      media:"https://res.cloudinary.com/dfxpd800j/video/upload/v1673802572/Extrovert_dqhh6z.mp3",
      type:"audio",
      options: [{ id: '1', text: 'listen quietly' }, { id: '2', text: 'feel relaxed' },{ id: '3', text: 'get emotional' }, { id: '4', text: 'start vibing on it' }],
    },
    {
      id: "12",
      title: "What are your thoughts about this music?",
      media:"https://res.cloudinary.com/dfxpd800j/video/upload/v1674750337/feeling_ufd7zx.mp3",
      type:"audio",
      options: [{ id: '1', text: 'You think it will mess up your ears.'}, { id: '2', text: 'You feel hyped up' },{ id: '3', text: 'You start dancing on it' }, { id: '4', text: 'You think this is cringe' }],
    },
    {
      id: "13",
      title: "What are your thoughts about this music?",
      media:"https://res.cloudinary.com/dfxpd800j/video/upload/v1674750334/sensing_fkmktz.mp3",
      type:"audio",
      options: [{ id: '1', text: 'This song is pretty good.' }, { id: '2', text: 'I don’t like this song' },{ id: '3', text: 'I will put this song on repeat' }, { id: '4', text: 'I think this song is weird' }],
    },
    {
      id: "14",
      title: "What are your thoughts about this music?",
      media:"https://res.cloudinary.com/dfxpd800j/video/upload/v1674750332/judging_tlmikz.mp3",
      type:"audio",
      options: [{ id: '1', text: 'feels annoying' }, { id: '2', text: 'think this music is soothing' },{ id: '3', text: 'You start dancing on it' }, { id: '4', text: 'You feel hyped up' }],
    },
    {
      id: "15",
      title: "What are your thoughts about this music?",
      media:"https://res.cloudinary.com/dfxpd800j/video/upload/v1674750331/introvert_m0dyda.mp3",
      type:"audio",
      options: [{ id: '1', text: 'You start dancing on it' }, { id: '2', text: 'You feel hyped up' },{ id: '3', text: 'I will put this song on repeat' }, { id: '4', text: 'You think it will mess up your ears.' }],
    },
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
