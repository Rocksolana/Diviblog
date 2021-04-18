import React from 'react'
import Logo from './Logo/Logo'
import Menu from './Menu/Menu'


import './header.css'


const Header = () =>{
    return (
        <header className="header">
        <div className="dark">
            <div className="conteiner">
                <div className="row header-row">
                    <div className="col-sm-3">
                            <Logo/>
                         </div>
                    <div className="col-sm-9">
                        <Menu/>
                    </div>
                </div>
            </div>
        </div>
    </header>
    )
}
export default Header