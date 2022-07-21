
import DateTimeCalc from './DateTimeCalc';
import useScript from './useScript';
import { useState } from 'react';
import React from 'react';

function Home() {
    
    useScript('https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8866834607753051');
    useScript('https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js');
     

    return (
 
        <div className="container">
            <nav>
                <div className="nav-wrapper grey lighten-2">
                <a href="#" className="brand-logo"> &nbsp; <i className="large material-icons">date_range</i> Calc Today</a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><a href="#">&nbsp;</a></li>
                        <li><a href="#">&nbsp;</a></li>
                        <li><a href="#">&nbsp;</a></li>
                    </ul>
                </div>
            </nav> 
            <DateTimeCalc />

            <ul className="collapsible">
                <li>
                    <div className="collapsible-header">
                    <i className="material-icons">history</i>
                    History (Soon, under construction)
                    <span className="badge">0</span></div>
                    <div className="collapsible-body"><p>Lorem ipsum dolor sit amet.</p></div>
                </li>
            </ul>
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css" /> 
            
        </div>
       
    )
}

export default Home




