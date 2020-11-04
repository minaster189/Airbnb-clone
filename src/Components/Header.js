import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import LanguageIcon from '@material-ui/icons/Language';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Avatar from '@material-ui/core/Avatar';
import './Header.css';

function Header() {
    return (
        <div className="header">
            <a href="/">
                <img
                className="header-icon" 
                src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png" 
                alt="logo Airbnb"/>
            </a>
            
            <div className="header-center">
                <input type="text" placeholder="Start your search"/>
                <SearchIcon className="header-search"/>
            </div>

            <div className="header-right">
                <p>Become a host</p>
                <LanguageIcon/>
                <ExpandMoreIcon/>
                <Avatar/>
            </div>
        </div>
    )
}

export default Header;
