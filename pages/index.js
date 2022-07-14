import {useState} from 'react';
 
import Painel from './Painel';
import DayPercentage from './DayPercentage';
import Estilo from './Estilo';
import Botao from './Botao'; 
import React from 'react';
import CalcularPorcentagem from './Porcentagem.js';
import ReactDOM from 'react-dom';


// see https://www.freecodecamp.org/news/pass-data-between-components-in-react/
// to learn how to send data between components


function JoinTypes(){
  var finalType = "";
  lstCom.forEach(k => {finalType = finalType + k.ButtonType});
  return finalType;
}


function Calcular(){
 if (JoinTypes() == "numeroporcentagemdenumerobase")
 {
  return CalcularPorcentagem(lstCom);
 }
}

function IncrementList(temp){
  if(lstCom.length > 0 && temp.ButtonType == 'numero' && lstCom[lstCom.length - 1].ButtonType === 'numero'){
    lstCom[lstCom.length - 1].ButtonValue = lstCom[lstCom.length - 1].ButtonValue + temp.ButtonValue; 
  }else if(lstCom.length > 0 && temp.ButtonType == 'base' && lstCom[lstCom.length - 1].ButtonType === 'base'){
    lstCom[lstCom.length - 1].ButtonValue =  temp.ButtonValue; 
  }else{
    lstCom.push(temp);
  }
}

 
var lstCom = []; 
function Home() {
  let [Parcial, setParcial] = useState(''); 
  let [Sub, setSub] = useState(''); 
  let [Res, setRes] = useState(''); 

    const GetButtonValue = (ButtonValue,ButtonType) => {
      if(ButtonType == 'clear')
      {
        lstCom = [];
        setRes('');
      }else if(ButtonType == 'igual')
      {
        var teste = Calcular();
        setRes(teste); 
      }
      else{

        let temp = {ButtonValue : ButtonValue , ButtonType:ButtonType}
        IncrementList(temp);
      //  console.log(lstCom,temp);
        
        var finalSub = '';
        lstCom.forEach(k => {finalSub = finalSub + k.ButtonValue + ' '});
        
        setRes(lstCom[lstCom.length - 1].ButtonValue);
      }
        setSub(  finalSub );
    }

     

    const Result = (a) => {
        setData(a);
      }


    return  ( 
<div className="container">
    <div className="row">
    <Painel Result={Res} Parcial={Parcial} Sub={Sub} />
    </div>
    <div className="row"> 
    <Botao valor="7" cor="card-panel teal" col="col s1 m1" textColor="white-text" tipo="numero" GetButtonValue={GetButtonValue}/>
    <Botao valor="8" cor="card-panel teal" col="col s1 m1" textColor="white-text" tipo="numero" GetButtonValue={GetButtonValue}/>
    <Botao valor="9" cor="card-panel teal" col="col s1 m1" textColor="white-text" tipo="numero" GetButtonValue={GetButtonValue}/>
    <Botao valor="Days" cor="card-panel darken-1" col="col s2 m2" textColor="dark-text" tipo="base" GetButtonValue={GetButtonValue}/>
    <Botao valor="= " cor="card-panel darken-1" col="col s1 m1" textColor="dark-text" tipo="igual" GetButtonValue={GetButtonValue}/>
    </div>
    <div className="row">
    <Botao valor="4" cor="card-panel teal" col="col s1 m1" textColor="white-text" tipo="numero" GetButtonValue={GetButtonValue}/>
    <Botao valor="5" cor="card-panel teal" col="col s1 m1" textColor="white-text" tipo="numero" GetButtonValue={GetButtonValue}/>
    <Botao valor="6" cor="card-panel teal" col="col s1 m1" textColor="white-text" tipo="numero" GetButtonValue={GetButtonValue}/>
    <Botao valor="Hours" cor="card-panel darken-1" col="col s2 m2" textColor="dark-text" tipo="base" GetButtonValue={GetButtonValue}/>
    <Botao valor="% " cor="card-panel darken-1" col="col s1 m1" textColor="dark-text" tipo="porcentagem" GetButtonValue={GetButtonValue}/>
    </div>
    <div className="row">
    <Botao valor="1" cor="card-panel teal" col="col s1 m1" textColor="white-text" tipo="numero" GetButtonValue={GetButtonValue}/>
    <Botao valor="2" cor="card-panel teal" col="col s1 m1" textColor="white-text" tipo="numero" GetButtonValue={GetButtonValue}/>
    <Botao valor="3" cor="card-panel teal" col="col s1 m1" textColor="white-text" tipo="numero" GetButtonValue={GetButtonValue}/>
    <Botao valor="Minutes" cor="card-panel darken-1" col="col s2 m2" textColor="dark-text" tipo="base" GetButtonValue={GetButtonValue}/>
    <Botao valor="In" cor="card-panel darken-1" col="col s1 m1" textColor="dark-text"  tipo="em" GetButtonValue={GetButtonValue}/>
    </div>
    <div className="row">
    <Botao valor="C" cor="card-panel blue-grey" col="col s1 m1" textColor="white-text" tipo="clear" GetButtonValue={GetButtonValue}/>
    <Botao valor="0" cor="card-panel teal" col="col s1 m1" textColor="white-text" tipo="numero" GetButtonValue={GetButtonValue}/>
    <Botao valor="." cor="card-panel blue-grey" col="col s1 m1" textColor="white-text" tipo="numero" GetButtonValue={GetButtonValue}/>
    <Botao valor="Seconds" cor="card-panel darken-1" col="col s2 m2" textColor="dark-text" tipo="base" GetButtonValue={GetButtonValue}/>
    <Botao valor="Of" cor="card-panel darken-1" col="col s1 m1" textColor="dark-text"  tipo="de" GetButtonValue={GetButtonValue}/>
    </div> 
     <DayPercentage display="showD" /> 
   <Estilo/> 

    <div>
       <input type="button" className='hideD' onClick={() => Result('teste')} value="teste parent to child" />
      </div>

</div>
       
  )
}
  
function teste2(){
var dt = new Date();
var result = dt.setDate(dt.getDate() + parseFloat(10.5));
console.log(result,dt.getDate());
}

//npm run dev to start

 

export default Home




 