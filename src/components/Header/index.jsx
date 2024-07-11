import React from 'react';
import {HeaderTop, HeaderMid, Navbar} from "./style";
import { Link } from 'react-router-dom';

const Header = () => {
    let location = ["Asaka"]
  return (
    <header>

        {/* HEADER TOP START */}
        <HeaderTop>
            <div className="container header__top--inner">
                {/* HEADER TOP LEFT START */}
                    <div className='header__top--left'>
                    <button className='header__top--left-btn'>
                        <i className="fa-solid fa-location-dot"></i> 
                        <p className='header__top--left-description'>Shahar: <span> {location[0]}</span></p>
                    </button>

                    <div className="header__top--left-inner">
                        <Link to={"/delivery-point"}>Topshirish punktlari</Link>
                    </div>
                    </div>
                {/* HEADER TOP LEFT START */}


                {/* HEADER TOP RIGHT START */}
                <div className='header__top--right'>
                    <a className='header__top--right-link' target='_blank' href="https://seller.uzum.uz/?utm_source=uzum&utm_medium=web&utm_campaign=header_link">
                    Uzumda soting
                   </a>
                   <Link to={"/faq"}>Savol-javoblar</Link>
                   <Link to={"/orders"}>Buyurtmalarim</Link>

                   {/* LANGUAGE  START */}
                    <form>
                            <select value="language">
                                <option name="uzb" id="uzb">O'zbekcha</option>
                                <option name="rus" id="rus">Ruscha</option>
                            </select>
                    </form>
                   {/* LANGUAGE END*/}
                </div>
                {/* HEADER TOP RIGHT END */}
            </div>
        </HeaderTop>
        {/* HEADER TOP END */}


       <div className="container">

        <HeaderMid>HeaderMid</HeaderMid>
        <Navbar>Navbar</Navbar>
       </div>
    </header>
  )
}


export default Header