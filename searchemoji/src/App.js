import React, {useEffect, useState} from 'react'
import {Container, TextField} from '@mui/material';
import axios from 'axios';

const App = () => {
  const API_URL = 'https://jsonplaceholder.typicode.com/todos/1'
  const [getData, setGetData] = useState([]);

  useEffect(() => {
    axios.get(API_URL).then(response => {
      console.log(setGetData([response.data]))
      console.log(getData)
    })
  }, []);
  
  return (
    <>
      {/* {getData.map(data => {
        return (
          <>
            {data.id}
          </>
        )
      })} */}
      <Container sx={{border : '2px dashed black', marginTop:'100px'}} maxWidth="sm">
        <TextField sx={{margin:'50px'}} id="outlined-basic" label="Search Emoji" variant="outlined" />
      </Container>
    </>
  )
}
export default App;
