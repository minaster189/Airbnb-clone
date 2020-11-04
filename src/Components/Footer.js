import React from 'react'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import './Footer.css';

function Footer() {
    return (
        <div className="footer">
            <p>© 2020 Airbnb clone! No rights reserved - This is a demo!</p>
            <p>Privacy · Terms · Sitemap · Company Details</p>
            <FacebookIcon/>
            <InstagramIcon/>
            <TwitterIcon/>
        </div>
    )
}

export default Footer
