import { useState } from 'react'
import './Header.css'
import logo from './assets/logo.png'

function Header() {
    const [count, setCount] = useState(0);

    return (
        <>
            <header>
                <div className='headertop'>
                    <img src={logo} />
                    <div className='searchBar-container'>
                        <input type='search' className='searchBar' placeholder='Search'></input>
                        <button className='search' onClick={'/'}><svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#FFFFFF"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="search-icon"
                        >
                            <circle cx="11" cy="11" r="8"></circle>
                            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                        </svg></button>
                    </div>

                    <div className='cart-container'>
                        <button className='profile'><svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#FFF"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="user-icon"
                        >
                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                            <circle cx="12" cy="7" r="4"></circle>
                        </svg></button>


                        <button className='shopcart'><svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#FFFFFF"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="cart-icon"
                        >
                            <circle cx="9" cy="21" r="1"></circle>
                            <circle cx="20" cy="21" r="1"></circle>
                            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                        </svg></button></div>
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
                {/* <Routes>

        </Routes> */}
            </header>
        </>
    )
}

export default Header
