import React from 'react';

const Ordercart = ({carts}) => {
    return (
        <div>
            <p>Name:{carts.name}</p>
            <p>Price:$ {carts.price}</p>
            <p>Ratings: {carts.ratings} Star</p>
        </div>
    );
};

export default Ordercart;