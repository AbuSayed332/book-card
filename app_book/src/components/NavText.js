import React from 'react';
import { NavLink } from 'react-router-dom';

export default function NavText() {

  return (
    <ul className="hidden md:flex items-center space-x-6">
      <NavLink
        className={(navInfo) =>
          navInfo.isActive ? "font-semibold" : "cursor-pointer"
        }
        to="/"
        id="lws-bookStore"
      >
        <li>Book Store</li>
      </NavLink>
      <NavLink
        className={(navInfo) =>
          navInfo.isActive ? "font-semibold" : "cursor-pointer"
        }
        to="/Addbook"
        id="lws-addBook"
      >
        <li>Add Book</li>
      </NavLink>
    </ul>
  );
}
