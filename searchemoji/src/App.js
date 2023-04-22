import React, {useState} from 'react'
import {Container, TextField} from '@mui/material';
import data from './JSON/emojiList.json'


const App = () => {

  const [showEmoji, setShowEmoji] = useState([]);

  const getInputValue = (e) => {
        if (e.target.value.length !== 0){
          for (let i = 0; i < data.length; i++) {
                if(data[i].keywords.includes(e.target.value)) {
                  if(showEmoji.includes(data[i].symbol)){
                    continue;
                  }else{
                    setShowEmoji([...showEmoji, data[i].symbol])
                  }
                }
          }
        }
        else{
          setShowEmoji([])
        }
  }


  
  return (
    <>
      <Container sx={{border : '2px dashed black', marginTop:'100px'}} maxWidth="sm">
        <TextField onChange={getInputValue} sx={{margin:'50px'}} id="outlined-basic" label="Search Emoji" variant="outlined" />
        <h1>Possible Options : {showEmoji.map((item) => {
          return (<h6 style={{display:'inline-block'}}>{item}</h6>)
        })}</h1>
        <h1>Exact Match : {showEmoji[showEmoji.length - 1]}</h1>
      </Container>
    </>
  )
}
export default App;
