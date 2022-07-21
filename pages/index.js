
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
            <div className="nav-wrapper  grey darken-3">
            <a href="#" className="brand-logo"> &nbsp; <i class="large material-icons">date_range</i> Boas contas ...</a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><a href="#">&nbsp;</a></li>
                <li><a href="#">&nbsp;</a></li>
                <li><a href="#">&nbsp;</a></li>
            </ul>
            </div>
         </nav>
         <div class="progress">
      <div class="indeterminate"></div>
  </div>
            <DateTimeCalc />
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
        </div>
    )
}

export default Home




