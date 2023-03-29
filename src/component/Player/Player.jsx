import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Singel from '../Singel/Singel';



import './Player.css'

const Player = () => {
    const [players, setplayers] = useState([]);
    const [cart, setCart] = useState([])


    useEffect(() => {
        fetch('player.json')
            .then(res => res.json())
            .then(data => setplayers(data))
    }, [])

    const addToBook = (player) => {
        const exist = cart.find(item => item.id == player.id)
        if (exist) {
            return alert("This player already added to cart")
        }
        const newCart = [...cart, player]
        setCart(newCart)
        console.log
            (player)
    }


    return (
        <div className='player-container'>
            <div className='player-list'>
                {
                    players.map(player => <Singel player={player} key={player.id} addToBook={addToBook}></Singel>)
                }
            </div>
            <div className='side-cart'>
                <Cart cart={cart} ></Cart>
            </div>
        </div>
    );

};

export default Player;