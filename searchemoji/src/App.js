import React, {useState} from 'react'
import {Container, TextField} from '@mui/material';
import data from './JSON/emojiList.json'


const App = () => {

  const [showEmoji, setShowEmoji] = useState([]);

  const getInputValue = (e) => {

        for (let i = 0; i < data.length; i++) {
              if(data[i].keywords.includes(e.target.value)) {
                if(showEmoji.includes(data[i].symbol)){
                  continue;
                }else{
                  setShowEmoji([...showEmoji, data[i].symbol])
                }
              }
        }

      console.log(showEmoji);
  }


  
  return (
    <>
      <Container sx={{border : '2px dashed black', marginTop:'100px'}} maxWidth="sm">
        <TextField onChange={getInputValue} sx={{margin:'50px'}} id="outlined-basic" label="Search Emoji" variant="outlined" />
        
      </Container>
    </>
  )
}
export default App;
