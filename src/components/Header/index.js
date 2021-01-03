import React from 'react'
import './style.css'


function  Header() {
    
    return(
        <header>
            <a href="/login">Login</a>
            <a href="/">Home</a>
            <a href="/register">Cadastre-se</a>
           
        </header>
    );
}

export default Header;