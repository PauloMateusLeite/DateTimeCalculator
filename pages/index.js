import {useState} from 'react';
 
import Painel from './Painel';
import DayPercentage from './DayPercentage';
import Estilo from './Estilo';
import Botao from './Botao';

import React from 'react';
import ReactDOM from 'react-dom';

// see https://www.freecodecamp.org/news/pass-data-between-components-in-react/
// to learn how to send data between components

function Home() {
    const [data, setData] = useState('');

    const parentToChild = () => {
        setData("this goes to child.");
      }


    return  ( 
<div className="container">
    <div className="row">
    <Painel Result="Resultado" Parcial="Parcial" Sub="Mensagem linha inferiorr" parentToChild={data}/>
    </div>
    <div className="row"> 
    <Botao valor="7" cor="card-panel teal" col="col s1 m1" textColor="white-text" tipo="numero"/>
    <Botao valor="8" cor="card-panel teal" col="col s1 m1" textColor="white-text" tipo="numero"/>
    <Botao valor="9" cor="card-panel teal" col="col s1 m1" textColor="white-text" tipo="numero"/>
    <Botao valor="Decimal" cor="card-panel darken-1" col="col s2 m2" textColor="dark-text" tipo="base"/>
    <Botao valor="= " cor="card-panel darken-1" col="col s1 m1" textColor="dark-text"/>
    </div>
    <div className="row">
    <Botao valor="4" cor="card-panel teal" col="col s1 m1" textColor="white-text" tipo="numero"/>
    <Botao valor="5" cor="card-panel teal" col="col s1 m1" textColor="white-text" tipo="numero"/>
    <Botao valor="6" cor="card-panel teal" col="col s1 m1" textColor="white-text" tipo="numero"/>
    <Botao valor="Days" cor="card-panel darken-1" col="col s2 m2" textColor="dark-text" tipo="base"/>
    <Botao valor="% " cor="card-panel darken-1" col="col s1 m1" textColor="dark-text"/>
    </div>
    <div className="row">
    <Botao valor="1" cor="card-panel teal" col="col s1 m1" textColor="white-text" tipo="numero"/>
    <Botao valor="2" cor="card-panel teal" col="col s1 m1" textColor="white-text" tipo="numero"/>
    <Botao valor="3" cor="card-panel teal" col="col s1 m1" textColor="white-text" tipo="numero"/>
    <Botao valor="Minutes" cor="card-panel darken-1" col="col s2 m2" textColor="dark-text" tipo="base"/>
    <Botao valor="In" cor="card-panel darken-1" col="col s1 m1" textColor="dark-text"/>
    </div>
    <div className="row">
    <Botao valor="C" cor="card-panel blue-grey" col="col s1 m1" textColor="white-text" tipo="Clear"/>
    <Botao valor="0" cor="card-panel teal" col="col s1 m1" textColor="white-text" tipo="numero"/>
    <Botao valor=". " cor="card-panel blue-grey" col="col s1 m1" textColor="white-text" tipo="numero"/>
    <Botao valor="Seconds" cor="card-panel darken-1" col="col s2 m2" textColor="dark-text" tipo="base"/>
    <Botao valor="Of" cor="card-panel darken-1" col="col s1 m1" textColor="dark-text"/>
    </div> 
    <DayPercentage display="showD" /> 
    <Estilo/> 

    <div>
       <input type="button" onClick={() => parentToChild()} value="teste parent to child" />
      </div>

</div>
       
  )
}

 
function teste2(){
var dt = new Date();
var result = dt.setDate(dt.getDate() + parseFloat(10.5));
console.log(result);
}

//npm run dev to start

export default Home



 