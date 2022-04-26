import React, { Component } from 'react';
import Navbar from '../routes/Navbar';
import gamephoto from '../images/gameGuy.svg';
import '../themes/Navbar.css';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div >
            <Navbar/>
            <div>
            <header>
                    <div className=" group content-Vector">
                        <h1>Welcome</h1>
                        <p>An online platform for you to <strong>relax</strong> and <strong>be yourself</strong> by playing a game </p>
                        <p>or journal with the memo editor</p>
                   <Link to='/Memo'><button className="btn-journal">Write a Journal</button></Link> 
                   <Link to='/Games'><button className='btn-game'>Play a game</button></Link>
                    </div>
                    <div className="game-Vector">
                    <img src={gamephoto} height='50%' width='50%'></img>
                    </div>
                
                </header>
            </div>
        </div>
      );
}
