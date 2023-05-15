import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import './card.css';
import {posts} from '../data'

const Post = () => {
    // const location = useLocation();
    // const path = location.pathname.split("/")[2];
    // // console.log(path, 'path')
    const [data, setData] = useState([])

    const getData = async () => {
        const apiData = await axios.get(`http://localhost:4050/api/v1/home`)
        setData(apiData.data)
        console.log(data, 'api data1')
      }
    console.log(data, 'api data2')

    useEffect(() => {
        getData()
    }, [])
    
    // const post = data.find((p) => p._id.toString() === path);
    // console.log(post, 'postdata')

    // console.log(location, 'location');

    return (
        <div className="post">
            {/* <img src={post.img} alt="" className="postImg" />
            <h1 className="postTitle">{post.title}</h1>
            <p className="postDesc">{post.desc}</p>
            <p className="postLongDesc">{post.longDesc}</p> */}
        </div>
    )
}

export default Post