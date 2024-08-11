import { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import './style.css'

export default function RatingStars ({noOfStars=10}) { 
    const [rating,setRating] =useState(0);
    const [hover,setHover] =useState(0);

    function handleClick(getCurrentIndex){
        setRating(getCurrentIndex);
    }
    function handleMouseMove(getCurrentIndex){
        setHover(getCurrentIndex);
    }
    function handleMouseLeave(rating){
        setHover(rating);
    }
  return <div className='star-rating'>
    <center>
    <h2>Provide your Star Rating</h2>
    <h3>{rating}/10</h3>
        {
        [...Array(noOfStars)].map((_,index)=>{
            index+=1;
            return(
            <FaStar 
            key={index}
            className={index<=(hover || rating) ? 'active' : 'inactive'}
            onClick={()=>handleClick(index)}
            onMouseMove={()=>handleMouseMove(index)}
            onMouseLeave={()=>handleMouseLeave(index)}
            size={40}
            />
            );
        })
    }
    </center>
</div>
}
