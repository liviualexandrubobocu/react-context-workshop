import React from 'react';
import {Link} from "react-router-dom";

const Menu = () => {
    return (
          <div>
              <nav>
                  <ul>
                      <li><Link to="/">Home</Link></li>
                      <li><Link to="/details">Details</Link></li>
                      <li><Link to="/books">Books</Link></li>
                      <li><Link to="/blames">Blames</Link></li>
                      <li><Link to="/admin">Admin</Link></li>
                  </ul>
              </nav>
          </div>
    );
}

export default Menu;