import React from "react";
import {Link} from 'react-router-dom';
import './style.css'
export default function Header() {
  return (
    
    <div className="row">
     
      <div className="col-md-12">
        <nav className="navbar navbar-expand-lg navbar-light bg-light text-center">
          <Link className="title" to='/'>
            React Blog App
          </Link>
        </nav>
      </div>
    </div>
  );
}
