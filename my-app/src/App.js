import './App.css';
import DogSlider from './components/slide.js';
import { SliderData } from './components/slideData.js';
import Header from './components/header';
import React, { useEffect, useState } from 'react'

export default function App() {

  const url = 'https://api.thedogapi.com/v1/images/search?limit=11api_key=live_GsPeLnxn0T5c4qLJv3gAFWAxeycQ52xtYBYKEraP5h20RTyWCIGd4qiNw98b1LYg'
 // {'x-api-key': 'live_GsPeLnxn0T5c4qLJv3gAFWAxeycQ52xtYBYKEraP5h20RTyWCIGd4qiNw98b1LYg'}
  const [DogData, setDogData] = useState([])

useEffect(() => {
  fetch(url)
    .then((res) => res.json())
    .then((data) => setDogData(data.data))
    .catch(err => console.log('oops something went wrong where are the doggies', err))
},[]);

  console.log(dogData)

  return(
    <div>
      <Header />
      <DogSlider slides={dogData} />;
    </div>
  )
}
