import React, { useState, useEffect } from 'react';
import Card from './Card';
import axios from 'axios';
import './card.css';
import { posts } from "../data";

const Home = () => {
  const [data, setData] = useState([])

  const homeData = async () => {
    const apiData = await axios.get(`http://localhost:4050/api/v1/home`)
    setData(apiData.data)
    console.log(apiData.data, 'api data')
  }

  useEffect(() => {
    homeData()
  }, [])

  return (
    <div className='home'>
      {data.map((item) => {
        return (
          <>
            <Card key={item._id} item={item} />
          </>
        )
      })}

    </div>
  )
}

export default Home