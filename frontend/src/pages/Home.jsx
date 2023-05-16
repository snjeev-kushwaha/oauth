// import React, { useState, useEffect } from 'react';
// import Card from './Card';
// import axios from 'axios';
import './card.css';

// const Home = () => {
//   const [data, setData] = useState([])

//   const homeData = async () => {
//     const apiData = await axios.get(`http://localhost:4050/api/v1/home`)
//     setData(apiData.data)
//     console.log(apiData.data, 'api data')
//   }

//   useEffect(() => {
//     homeData()
//   }, [])

//   return (
//     <div className='home'>
//       {data.map((item) => {
//         return (
//           <>
//             <Card key={item._id} item={item} />
//           </>
//         )
//       })}

//     </div>
//   )
// }

// export default Home

import Card from "../pages/Card"
import { posts } from "../data"

const Home = () => {
  return (
    <div className="home">
      {posts.map(post => (
        <Card key={post.id} post={post} />
      ))}
    </div>
  )
}

export default Home