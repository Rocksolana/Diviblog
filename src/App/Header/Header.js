import React from 'react'
import Logo from './Logo/Logo'

import HamburgerMenu from './Menu/Menu'


import './header.css'
import { ReactBurgerMenu } from 'react-burger-menu'


const Header = () =>{
    return (
        <header className="header">
        <div className="dark">
            <div className="conteiner">
                <div className="row header-row">
                <div className="col-sm-12">
                    <div className="col-sm-3">
                            <Logo/>
                         </div>
                    <div className="col-sm-9">
                        <HamburgerMenu/>
                    </div>
                
                  </div>
                </div>
            </div>
        </div>
    </header>
    )
}
export default Header