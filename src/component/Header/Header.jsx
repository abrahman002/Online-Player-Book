import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <img src="https://th.bing.com/th/id/R.4b887aa7a8436f15c1345fa0938b1a5b?rik=ZY5cOSSimAvH6Q&riu=http%3a%2f%2fs2.firstpost.in%2fwp-content%2fuploads%2f2017%2f07%2fBangladesh-Cricket-Team-LogoW-1024x450_opt.png&ehk=s2foh8dCDltDGt1fZ%2fHQOyKVrjHLfbG3ShYPOOs6ZNE%3d&risl=&pid=ImgRaw&r=0" alt="" />
            <div>
                <a href="/order">Order</a>
                <a href="/order review">Order Review</a>
                <a href="/shope">Shope</a>
                <a href="/login">Login</a>
            </div>
        </div>
    );
};

export default Header;