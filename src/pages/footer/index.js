import React from 'react'
import { Link } from 'react-router-dom';
import './styles.css';
import WhatsApp from './../../assets/whatsapp.png';
import Facebook from './../../assets/facebook.png';
import Instagram from './../../assets/instagram.png';
import image18 from './../../assets/18+.png';

export default () => (
    <footer>
        <div className="footer-content linha1">
                <div className="newsletter">
                <fieldset className="fildeset-linha1" >
                    <p className="titulo1" >
                        <span>NOVIDADES NO SEU E-MAIL</span>
                        <small>Cadastre-se e receba ofertas exclusivas</small>
                    </p>
                    <input className="newsletter-client-name" placeholder="Digite seu nome"/>
                    <input className="newsletter-client-email" placeholder="Digite seu e-mail"/>
                    <button className="newsletter-button-enviar" type="submit">Enviar</button>
                </fieldset>
                </div>
        </div>
        <div className="footer-content linha2">
            <div className="linha2-cont">
                <div className="linha2-cont1">
                    <div className="colp-1">
                        <h3>Institucional</h3>
                        <ul>
                            <li>
                                Quem Somos
                            </li>
                            <li>
                                Politica de Entrega
                            </li>
                        </ul>
                    </div>
                    <div className="colp-2">
                        <h3>Entre em contato</h3>
                        <Link>
                            <img src={WhatsApp} />
                        </Link>
                    </div>
                </div>
            </div>
            <div className="linha2-cont2">
                <div className="linha2-cont2-top">
                    
                    <Link className="link-redeSocial link1" >
                            <img src={Facebook} />
                            <h3><small>facebook.com/</small>
                            adegaaguadoce</h3>
                    </Link>
                    <Link className="link-redeSocial link2" >
                            <img src={Instagram} />
                            <h3><small>instagram.com/</small>
                            adegaaguadoce</h3>
                    </Link>
                    
                </div>
                <div className="linha2-cont2-bottom">
                    <div className="link-redeSocial link3">
                        <img src={image18}/>
                        <h3>Venda proibída para menores de 18 anos.
                        <small>Aprecie com moderação. Se beber não dirija!</small></h3>
                    </div>
                </div>
            </div>
        </div>
    </footer>

);