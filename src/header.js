import React from "react";
import {Link} from 'react-router-dom';

export default function Header() {
  return (
    
    <div className="row">
     
      <div className="col-md-12">
        <nav className="navbar navbar-expand-lg navbar-light bg-light text-center">
          <Link to='/'>
            Troopers Blog
          </Link>
          
        </nav>
      </div>
    </div>
  );
}
