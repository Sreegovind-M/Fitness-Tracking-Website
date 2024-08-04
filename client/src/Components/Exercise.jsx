import React from 'react'
import axios from "axios"
const Exercise = () => {
    axios({
        method: 'get',
        url: "https://exercisedb.p.rapidapi.com/exercises/bodyPart/back?limit=10&offset=0",
        headers: {
            "x-rapidapi-host": "exercisedb.p.rapidapi.com",
            "x-rapidapi-key": "05651d711fmsh4a52af44fb02c24p159c88jsne95863eb36cb"
        }
    }).then((res) => console.log(res.data[0].gifUrl));
  return (
    <div>
      
    </div>
  )
}

export default Exercise
