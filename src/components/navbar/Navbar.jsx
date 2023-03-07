import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css';

const Menu = () => (
  <>
  <p><a href="#home">Home</a></p>
  <p><a href="#whgpt">What is GPT?</a></p>
  <p><a href="#possibility">Open AI</a></p>
  <p><a href="#features">Case Studies</a></p>
  <p><a href="#blog">Library</a></p>
  </>
) 
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className='gpt__navbar'>
      <div className="gpt__navbar-links">
        <div className="gpt__navbar-links_logo">
          <h1 className='gpt-logo'>GPT</h1>
        </div>

        <div className="gpt__navbar-links_container">
        <Menu />
        </div>

        <div className="gpt__navbar-sign">
          <p>Sign in</p>
          <button type='button'>Sign up</button>
        </div>

        <div className="gpt__navbar-menu">
          {toggleMenu 
            ? <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)} />
            : <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)} /> }
            {toggleMenu && (
              <div className="gpt__navbar-menu_container scale-up-center">
                <div className="gpt__navbar-menu_container-links">
                  <Menu />
                  <div className='gpt__navbar-menu_container-links-sign'>
                    <p>Sign in</p>
                    <button type='button'>Sign up</button>
                  </div>
                </div>
              </div>
            )

            }
        </div>
      </div>
    </div>
  )
}

export default Navbar
