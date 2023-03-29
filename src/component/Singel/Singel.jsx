import React from 'react';
import './Singel.css'

const Singel = (props) => {

    const {name,img,price,ratings}=props.player

    const addToBook=props.addToBook
    return (
        <div className='singel-conainer'>
            <img src={img} alt="" />
            <div className='player-info'>
                <h6>Name: {name}</h6>
                <p>Price:$ {price}</p>
                <p>Rating: {ratings} Star</p>
            </div>
            <button onClick={()=>addToBook(props.player)} className='btn-cart'>Book Now</button>
        </div>
    );
};

export default Singel;