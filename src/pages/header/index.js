import React from 'react'
import { FiUser, FiSearch, FiShoppingCart } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import Logo from './../../assets/Logo.png'
import './styles.css';

export default () => (

    <header>
        <div className="header-content">
            <div className="header-logo">
            <Link to="/register" className="header-logo" >
                <img src={Logo} />
            </Link>
            </div>
            <div className="menu">
                <ul className="menu-principal">
                    <li className="itemMenu" >
                        <Link className="links-menu" to="/register">
                            Cervejas
                        </Link>
                    <div className="box-subMenu">
                        <ul className="subCategoria">
                            <li className="subItem">
                                <Link>
                                    Larger
                                </Link>
                            </li>
                            <li className="subItem">
                                <Link>
                                    Stout
                                </Link>
                            </li>
                            <li className="subItem">
                                <Link>
                                    Trigo
                                </Link>
                            </li>
                            <li className="subItem">
                                <Link>
                                    Porter
                                </Link>
                            </li>
                            <li className="subItem">
                                <Link>
                                    Ale
                                </Link>
                            </li>
                        </ul>
                    </div>
                    </li>
                    <li className="itemMenu" >
                        <Link className="links-menu" to="/register">
                            Destilados
                        </Link>
                        <div className="box-subMenu">
                        <ul className="subCategoria">
                            <li className="subItem">
                                <Link>
                                    Whisky
                                </Link>
                            </li>
                            <li className="subItem">
                                <Link>
                                    Vodka
                                </Link>
                            </li>
                            <li className="subItem">
                                <Link>
                                    Tequila
                                </Link>
                            </li>
                            <li className="subItem">
                                <Link>
                                    Gin
                                </Link>
                            </li>
                            <li className="subItem">
                                <Link>
                                    Conhaque
                                </Link>
                            </li>
                            <li className="subItem">
                                <Link>
                                    Aguardente
                                </Link>
                            </li>
                        </ul>
                    </div>
                    </li>
                    <li className="itemMenu" >    
                        <Link className="links-menu" to="/register">
                            Vinhos
                        </Link>
                        <div className="box-subMenu">
                        <ul className="subCategoria">
                            <li className="subItem">
                                <Link>
                                    Tinto
                                </Link>
                            </li>
                            <li className="subItem">
                                <Link>
                                    Rosé
                                </Link>
                            </li>
                            <li className="subItem">
                                <Link>
                                    Branco
                                </Link>
                            </li>
                        </ul>
                    </div>
                    </li>
                </ul>
            </div>
            <div className="links-topo">
                <div className="link-button">
                    <FiSearch size={32} color="#1D1D1D"/>
                </div>
                <Link to="/register" className="link-button" >
                            <FiUser size={32} color="#1D1D1D"/>
                </Link>
                <Link to="/register" className="link-button" >
                    <FiShoppingCart size={32} color="#1D1D1D"/>
                    (0)
                </Link>
            </div>
    
    
        </div>
    </header>

);