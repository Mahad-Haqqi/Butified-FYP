import React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

const QuizCard = (
    {
        key,
        options,
        text,
        media,
        type,
        setArray,
        array,
    }
)=>
{
    
    // console.log("This", array)
    return (
        <FormControl>
      {type == "image" && (
        <div style={{display:"flex", justifyContent:"center"}}>
        <img src={media} alt="A bird pic for Quiz" width={400} height={260}/>

        </div>
      )}
      {type == "audio" && (
        <div style={{display:"flex", justifyContent:"center"}}>
        <audio controls className="audio-height">
          <source src={media} type="audio/ogg" />
        </audio>
        </div>
      )}
            
        <h5 id="demo-radio-buttons-group-label" style={{paddingTop:"20px", fontSize:"28px"}}>{text}</h5>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          name="radio-buttons-group"
        >
          {options.map((option) => {
            return (
              <FormControlLabel
                value={option.text}
                control={<Radio />}
                label={option.text}
                key={option.id}
                onClick={(e)=>{
                    setArray(array+" "+e.target.value)
                }}
              />
            );
          })}
        </RadioGroup>
      </FormControl>
    )


}

export default QuizCard;