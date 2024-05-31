import React, { useState, useEffect } from 'react'
import axios from 'axios'
const api_key = 'demo key'
const url = `https://api.nasa.gov/planetary/apod?api_key=${api_key}`
import Card from './card'
















function App() {
  const[nasaPic, getNasaPic] = useState([])

  useEffect(() =>{
    function fetchPhoto() {
      axios.get(url)
      .then(res => {
        console.log(res.data)
        getNasaPic(res.data)
      })
      .catch(err => {
        console.log(err.message)
      })
    }
//fetchPhoto()


  })
 
  // async function getPicOfDay(){
  //   try{
  //     const res = await axios.get(url)
  //     getNasaPic(res.data)
  //   }catch(err){
  //     console.log(err.message)
  //   }
  // }
   if(!nasaPic) return 'getting your photo ready'
  
  return (
   <section>
    <Card
    title={nasaPic.title}
    text={nasaPic.explanation}
    imageurl={nasaPic.url}
    date={nasaPic.date}
    />
   </section>
  )
}

export default App
