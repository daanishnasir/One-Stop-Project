import React, { Component } from 'react';
import './Footer.css'

class Footer extends Component {
  render(){
    return (

      <nav className='navbar navbar-default navbar-static-bottom footer'>
        <ul className="col-sm-1 col-sm-1 footerLinks">
          <li>About</li>
          <li>Blog</li>
          <li>Contract</li>
        </ul>
        <ul className="col-sm-1 col-sm-1 footerLinks">
          <li>Profile</li>
          <li>Dashboard</li>
          <li>Careers</li>
        </ul>
        <ul className="col-sm-3 col-sm-3 pull-right footerLinks social">
          <li><i className="fa fa-facebook fa-2x" aria-hidden="true"></i></li>
          <li><i className="fa fa-twitter fa-2x" aria-hidden="true"></i></li>
          <li><i className="fa fa-instagram fa-2x" aria-hidden="true"></i></li>
        </ul>

      </nav>
    )
  }
}

export default Footer;
