import React from 'react'
import './card.css'
import { Link } from 'react-router-dom';

const Card = ({ item }) => {
    return (
        <div className='card'>
            <Link to={`/post/${item._id}`}>
                <span className='title'>{item.title}</span>
                <img src={item.img} alt="" className='img' />
                <p className='desc'>{item.desc}</p>
                <button className='cardButton'>Read More</button>
            </Link>
        </div>
    )
}

export default Card