import { useState } from 'react'
import './Header.css'
import logo from './assets/logo.png'

function Header() {
  const [count, setCount] = useState(0);

  return (
    <>
    <header>
        <div className='headertop'>
            <img src={logo}/>
            <input type='search'></input>
        </div>
        <nav className='headerbottom-container'>
                <ul className='navbar-list'>
                    <li>
                        <a href="">Home</a>
                    </li>
                    <li>
                        <a href="">PC</a>
                    </li>
                    <li>
                        <a href="">Laptops</a>
                    </li>
                    <li>
                        <a href="" className='dropdown'>Accessories</a>
                    </li>
                    <li>
                        <a href="">More Essentials</a>
                    </li>
                    <li>
                        <a href="">Pre-Orders</a>
                    </li>
                    <li>
                        <a href="">Promos</a>
                    </li>
                    <li>

                    </li>
                </ul>
        </nav>
    </header>
    </>
  )
}

export default Header
