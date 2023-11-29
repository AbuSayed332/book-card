import React from 'react';
import logo from '../assest/images/logo.svg';
import NavForm from './NavForm';
import NavText from './NavText';

export default function Nav() {
  return (
    <nav className="py-4 2xl:px-6">
      <div className="container flex items-center justify-between">
        <img src={logo} width="150px" alt="logo" className="object-contain" />
         <NavText />
        <NavForm />
      </div>
    </nav>
  );
}
