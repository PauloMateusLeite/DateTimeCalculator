import { useState } from 'react';
import Painel from './Painel';
import DayPercentage from './DayPercentage';
import Estilo from './Estilo';
import Botao from './Botao';
import React from 'react';
import CalcularPorcentagem from './Porcentagem.js';
import NumeroBase from './NumeroBase.js';
import MudaBase from './MudaBase';
import ReactDOM from 'react-dom';


// see https://www.freecodecamp.org/news/pass-data-between-components-in-react/
// to learn how to send data between components

function JoinTypes() {
    var finalType = "";
    lstCom.forEach(k => { finalType = finalType + k.ButtonType });
    return finalType;
}

function Calcular() {
    if (JoinTypes() == "numeroporcentagemdenumerobase") {
        return CalcularPorcentagem(lstCom, lstCom[4].ButtonValue);
    }
    if (JoinTypes() == "numerobase") {
        return NumeroBase(lstCom[0].ButtonValue, lstCom[1].ButtonValue);
    } if (JoinTypes() == "numerobaseembase") {
        return MudaBase(lstCom[0].ButtonValue, lstCom[1].ButtonValue, lstCom[3].ButtonValue);
    }
}

//Esta funcao decide se o proximo botao incrementa o mesmo índice ou se aumenta um índice
function IncrementList(temp) {
    if (lstCom.length == 0 && temp.ButtonType == 'numero' && temp.ButtonValue === '.') {
        temp.ButtonValue = '0.';
        lstCom.push(temp);
    } else if (lstCom.length > 0 && temp.ButtonType == 'numero' && lstCom[lstCom.length - 1].ButtonType === 'numero') {
        lstCom[lstCom.length - 1].ButtonValue = lstCom[lstCom.length - 1].ButtonValue + temp.ButtonValue;
    } else if (lstCom.length > 0 && temp.ButtonType == 'base' && lstCom[lstCom.length - 1].ButtonType === 'base') {
        lstCom[lstCom.length - 1].ButtonValue = temp.ButtonValue;
    } else {
        lstCom.push(temp);
    }
}

var lstCom = [];
function Home() {


    let [Parcial, setParcial] = useState('');
    let [Sub, setSub] = useState('');
    let [Res, setRes] = useState('');
    var CalcRes = 0;
    const GetButtonValue = (ButtonValue, ButtonType) => {
        if (CommandMakesSense(ButtonValue, ButtonType)) {
            if (ButtonType == 'clear') {
                lstCom = [];
                setRes('');
                setParcial('');
            } else if (ButtonType == 'igual') {
                CalcRes = Calcular();
                setRes(CalcRes);
                if (CalcRes == "0d0h0m0s") {
                    setSub('Numbers smaller than one second will not be displayed');
                }
            }
            else {
                let temp = { ButtonValue: ButtonValue, ButtonType: ButtonType }
                IncrementList(temp);

                var finalSub = '';
                lstCom.forEach(k => { finalSub = finalSub + k.ButtonValue + ' ' });

                setRes(lstCom[lstCom.length - 1].ButtonValue);
            }
            if (CalcRes == "0d0h0m0s") {
                setSub('Results smaller than one second cannot be displayed');
            } else {
                setSub(finalSub);
            }
        } else {
            setParcial('Invalid command');
        }
    }

    function CommandMakesSense(valor, tipo) {
        if (tipo == 'clear') {
            return true;
        } else {
            if (!LastType() && tipo != 'numero') {
                return false;
            } else if (tipo == 'de' && LastType() != 'porcentagem') {
                return false;
            }
        }
        return true;
    }

    function LastValue() {
        if (lstCom.length == 0) {
            return null;
        }
        return lstCom[lstCom.length - 1].ButtonValue;
    }

    function LastType() {
        if (lstCom.length == 0) {
            return null;
        }
        return lstCom[lstCom.length - 1].ButtonType;
    }



    const Result = (a) => {
        setData(a);
    }


    return (

        <div className="container" >
            <div className="row ">
                <div className="col s7 m7 ">
                    <div className="row ">
                        <div className="col s12 m12 ">
                            <Painel Result={Res} Parcial={Parcial} Sub={Sub} />
                        </div>
                    </div>
                    <div className="row " >
                        <Botao valor="7" cor="card-panel teal" col="col s2 m3" textColor="white-text" tipo="numero" GetButtonValue={GetButtonValue} />
                        <Botao valor="8" cor="card-panel teal" col="col s2 m3" textColor="white-text" tipo="numero" GetButtonValue={GetButtonValue} />
                        <Botao valor="9" cor="card-panel teal" col="col s2 m3" textColor="white-text" tipo="numero" GetButtonValue={GetButtonValue} />
                        <Botao valor="Days" cor="card-panel darken-1" col="col s3 m2" textColor="dark-text" tipo="base" GetButtonValue={GetButtonValue} />
                        <Botao valor="= " cor="card-panel darken-1" col="col s1 m1" textColor="dark-text" tipo="igual" GetButtonValue={GetButtonValue} />
                    </div>
                    <div className="row">
                        <Botao valor="4" cor="card-panel teal" col="col s2 m3" textColor="white-text" tipo="numero" GetButtonValue={GetButtonValue} />
                        <Botao valor="5" cor="card-panel teal" col="col s2 m3" textColor="white-text" tipo="numero" GetButtonValue={GetButtonValue} />
                        <Botao valor="6" cor="card-panel teal" col="col s2 m3" textColor="white-text" tipo="numero" GetButtonValue={GetButtonValue} />
                        <Botao valor="Hours" cor="card-panel darken-1" col="col s3 m2" textColor="dark-text" tipo="base" GetButtonValue={GetButtonValue} />
                        <Botao valor="% " cor="card-panel darken-1" col="col s1 m1" textColor="dark-text" tipo="porcentagem" GetButtonValue={GetButtonValue} />
                    </div>
                    <div className="row">
                        <Botao valor="1" cor="card-panel teal" col="col s2 m3" textColor="white-text" tipo="numero" GetButtonValue={GetButtonValue} />
                        <Botao valor="2" cor="card-panel teal" col="col s2 m3" textColor="white-text" tipo="numero" GetButtonValue={GetButtonValue} />
                        <Botao valor="3" cor="card-panel teal" col="col s2 m3" textColor="white-text" tipo="numero" GetButtonValue={GetButtonValue} />
                        <Botao valor="Minutes" cor="card-panel darken-1" col="col s3 m2" textColor="dark-text" tipo="base" GetButtonValue={GetButtonValue} />
                        <Botao valor="In" cor="card-panel darken-1" col="col s1 m1" textColor="dark-text" tipo="em" GetButtonValue={GetButtonValue} />
                    </div>
                    <div className="row">
                        <Botao valor="C" cor="card-panel blue-grey" col="col s2 m3" textColor="white-text" tipo="clear" GetButtonValue={GetButtonValue} />
                        <Botao valor="0" cor="card-panel teal" col="col s2 m3" textColor="white-text" tipo="numero" GetButtonValue={GetButtonValue} />
                        <Botao valor="." cor="card-panel blue-grey" col="col s2 m3" textColor="white-text" tipo="numero" GetButtonValue={GetButtonValue} />
                        <Botao valor="Seconds" cor="card-panel darken-1" col="col s3 m2" textColor="dark-text" tipo="base" GetButtonValue={GetButtonValue} />
                        <Botao valor="Of" cor="card-panel darken-1" col="col s1 m1" textColor="dark-text" tipo="de" GetButtonValue={GetButtonValue} />
                    </div>
                    <DayPercentage display="hideD" />
                    <Estilo />
                    <div>
                        <input type="button" className='hideD' onClick={() => Result('teste')} value="teste parent to child" />
                    </div>
                </div>
                <div className="col offset-s1 offset-m1 s4 m4  ">


                    <div className="card">
                        <div className="card-content">
                            <p>Hi, you can use the calculator with 3 different ways: (You always need to click = when finish)</p>
                        </div>
                        {/*<div className="card-tabs">*/}
                        {/*    */}{/*<ul className="tabs tabs-fixed-width">*/}
                        {/*    */}{/*    <li className="tab"><a href="#test4">test 1</a></li>*/}
                        {/*    */}{/*    <li className="tab"><a className="active" href="#test5">test 2</a></li>*/}
                        {/*    */}{/*    <li className="tab"><a href="#test6">test 3</a></li>*/}
                        {/*    */}{/*</ul>*/}
                        {/*</div>*/}
                        <div className="card-content grey lighten-4">
                            <div id="test4">
                                <p>Calculating the porcentage of a period:</p>
                                <div className="row">
                                    <Botao valor="5" cor="card-panel teal" col="col s2 m2" textColor="white-text" tipo="numero" GetButtonValue={GetButtonValue} />
                                    <Botao valor="% " cor="card-panel darken-1" col="col s2 m2" textColor="dark-text" tipo="porcentagem" GetButtonValue={GetButtonValue} />
                                    <Botao valor="Of" cor="card-panel darken-1" col="col s2 m2" textColor="dark-text" tipo="de" GetButtonValue={GetButtonValue} />
                                    <Botao valor="1" cor="card-panel teal" col="col s2 m2" textColor="white-text" tipo="numero" GetButtonValue={GetButtonValue} />
                                    <Botao valor="Days" cor="card-panel darken-1" col="col s3 m4" textColor="dark-text" tipo="base" GetButtonValue={GetButtonValue} />
                                </div>
                                

                            </div>
                            <div id="test5">
                                <p>Converting period bases:</p>
                                <div className="row">
                                    <Botao valor="8" cor="card-panel teal" col="col s2 m2" textColor="white-text" tipo="numero" GetButtonValue={GetButtonValue} />
                                    <Botao valor="Days" cor="card-panel darken-1" col="col s3 m4" textColor="dark-text" tipo="base" GetButtonValue={GetButtonValue} />
                                    <Botao valor="In" cor="card-panel darken-1" col="col s2 m2" textColor="dark-text" tipo="em" GetButtonValue={GetButtonValue} />
                                    <Botao valor="Hours" cor="card-panel darken-1" col="col s3 m4" textColor="dark-text" tipo="base" GetButtonValue={GetButtonValue} />
                                </div>
                                
                            </div>
                            <div id="test6">
                                <p>Or</p>
                                <div className="row">
                                    <Botao valor="3" cor="card-panel teal" col="col s2 m2" textColor="white-text" tipo="numero" GetButtonValue={GetButtonValue} />
                                    <Botao valor="0" cor="card-panel teal" col="col s2 m2" textColor="white-text" tipo="numero" GetButtonValue={GetButtonValue} />
                                    <Botao valor="Hours" cor="card-panel darken-1" col="col s3 m4" textColor="dark-text" tipo="base" GetButtonValue={GetButtonValue} />
                                    
                                </div> 
                            </div>
                        </div>
                    </div>



                </div>
            </div>
        </div>

    )
}

function teste2() {
    var dt = new Date();
    var result = dt.setDate(dt.getDate() + parseFloat(10.5));
    console.log(result, dt.getDate());
}

//npm run dev to start



export default Home




