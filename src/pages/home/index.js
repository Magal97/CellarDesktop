import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Header from './../header/index.js';
import Footer from './../footer/index.js';
import './styles.css';
import Carousel from '../carousel/Carousel';
import caixaSkol from './../../assets/caixaSkol.png';
import Redlabel from './../../assets/RedLabel.png';
import JackDaniels from './../../assets/jackDaniels.png';
import caixinhaBud from './../../assets/CaixinhaBud.png';
import bannerCerveja from './../../assets/BannerCerveja.png';
import bannerDestilados from './../../assets/BannerDestilados.png';
import bannerVinho from './../../assets/BannerVinho.png';


export default function Home(){

    return(

    <div className="container" >
        <Header/>
        <div className="content">
            <div className="carousel-div">
                <Carousel/>
            </div>
            <div className="divisoria">
                <fieldset className="fildset" >
                    <legend>Mais vendidos</legend>
                </fieldset>
            </div>

            <div className="container-center">
                <div className="vitrineHome">
                    <ul className="vitrineMaisVendidos" >
                     <li>
                        <div className="descricao">
                            <h1>Caixinha Skol</h1>    
                        </div>
                        <div className="imagem">
                            <img src={caixaSkol} />
                        </div>
                        <div className="preco">
                            <p>R$ 30,99</p>
                        </div>
                     </li>
                     
                     <li>
                        <div className="descricao">
                            <h1>Red Label</h1>    
                        </div>
                        <div className="imagem">
                            <img src={Redlabel} />
                        </div>
                        <div className="preco">
                            <p>R$ 95,99</p>
                        </div>
                     </li>

                     <li>
                        <div className="descricao">
                            <h1>Jack Daniel's</h1>    
                        </div>
                        <div className="imagem">
                            <img src={JackDaniels} />
                        </div>
                        <div className="preco">
                            <p>R$ 110,00</p>
                        </div>
                     </li>

                     <li>
                        <div className="descricao">
                            <h1>Caixinha Budweiser</h1>    
                        </div>
                        <div className="imagem">
                            <img src={caixinhaBud} />
                        </div>
                        <div className="preco">
                            <p>R$ 25,99</p>
                        </div>
                     </li>
                     <li>
                        <div className="descricao">
                            <h1>Caixinha Skol</h1>    
                        </div>
                        <div className="imagem">
                            <img src={caixaSkol} />
                        </div>
                        <div className="preco">
                            <p>R$ 30,99</p>
                        </div>
                     </li>
                     
                     <li>
                        <div className="descricao">
                            <h1>Red Label</h1>    
                        </div>
                        <div className="imagem">
                            <img src={Redlabel} />
                        </div>
                        <div className="preco">
                            <p>R$ 95,99</p>
                        </div>
                     </li>

                     <li>
                        <div className="descricao">
                            <h1>Jack Daniel's</h1>    
                        </div>
                        <div className="imagem">
                            <img src={JackDaniels} />
                        </div>
                        <div className="preco">
                            <p>R$ 110,00</p>
                        </div>
                     </li>

                     <li>
                        <div className="descricao">
                            <h1>Caixinha Budweiser</h1>    
                        </div>
                        <div className="imagem">
                            <img src={caixinhaBud} />
                        </div>
                        <div className="preco">
                            <p>R$ 25,99</p>
                        </div>
                     </li>
                    </ul>
            
                </div>
                <div className="divisoria">
                    <fieldset className="fildset" >
                        <legend>Cervejas</legend>
                    </fieldset>
                </div>
                <div className="vitrineHome">
                    <div className="banner">
                        <img src={bannerCerveja} />
                    </div>
                    <ul>
                     
                     <li>
                        <div className="descricao">
                            <h1>Red Label</h1>    
                        </div>
                        <div className="imagem">
                            <img src={Redlabel} />
                        </div>
                        <div className="preco">
                            <p>R$ 95,99</p>
                        </div>
                     </li>

                     <li>
                        <div className="descricao">
                            <h1>Jack Daniel's</h1>    
                        </div>
                        <div className="imagem">
                            <img src={JackDaniels} />
                        </div>
                        <div className="preco">
                            <p>R$ 110,00</p>
                        </div>
                     </li>

                     <li>
                        <div className="descricao">
                            <h1>Caixinha Budweiser</h1>    
                        </div>
                        <div className="imagem">
                            <img src={caixinhaBud} />
                        </div>
                        <div className="preco">
                            <p>R$ 25,99</p>
                        </div>
                     </li>
                     
                    </ul>
                </div>

                <div className="divisoria">
                    <fieldset className="fildset" >
                        <legend>Vinhos</legend>
                    </fieldset>
                </div>
                <div className="vitrineHome">
                    <div className="banner">
                        <img src={bannerVinho} />
                    </div>
                    <ul>
                     
                     <li>
                        <div className="descricao">
                            <h1>Red Label</h1>    
                        </div>
                        <div className="imagem">
                            <img src={Redlabel} />
                        </div>
                        <div className="preco">
                            <p>R$ 95,99</p>
                        </div>
                     </li>

                     <li>
                        <div className="descricao">
                            <h1>Jack Daniel's</h1>    
                        </div>
                        <div className="imagem">
                            <img src={JackDaniels} />
                        </div>
                        <div className="preco">
                            <p>R$ 110,00</p>
                        </div>
                     </li>

                     <li>
                        <div className="descricao">
                            <h1>Caixinha Budweiser</h1>    
                        </div>
                        <div className="imagem">
                            <img src={caixinhaBud} />
                        </div>
                        <div className="preco">
                            <p>R$ 25,99</p>
                        </div>
                     </li>
                     
                    </ul>
                </div>


                <div className="divisoria">
                    <fieldset className="fildset" >
                        <legend>Destilados</legend>
                    </fieldset>
                </div>
                <div className="vitrineHome">
                    <div className="banner">
                        <img src={bannerDestilados} />
                    </div>
                    <ul>
                     
                     <li>
                        <div className="descricao">
                            <h1>Red Label</h1>    
                        </div>
                        <div className="imagem">
                            <img src={Redlabel} />
                        </div>
                        <div className="preco">
                            <p>R$ 95,99</p>
                        </div>
                     </li>

                     <li>
                        <div className="descricao">
                            <h1>Jack Daniel's</h1>    
                        </div>
                        <div className="imagem">
                            <img src={JackDaniels} />
                        </div>
                        <div className="preco">
                            <p>R$ 110,00</p>
                        </div>
                     </li>

                     <li>
                        <div className="descricao">
                            <h1>Caixinha Budweiser</h1>    
                        </div>
                        <div className="imagem">
                            <img src={caixinhaBud} />
                        </div>
                        <div className="preco">
                            <p>R$ 25,99</p>
                        </div>
                     </li>
                     
                    </ul>
                </div>


            </div>

            <Footer/>        
        </div>


    </div>
    
    );
};

