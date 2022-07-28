import { useState } from 'react';
import React from 'react';
import Painel from './Painel';
import Estilo from './Estilo';
import Botao from './Botao';
import CalcularPorcentagem from './Porcentagem.js';
import NumeroBase from './NumeroBase.js';
import MudaBase from './MudaBase'; 


// see https://www.freecodecamp.org/news/pass-data-between-components-in-react/
// to learn how to send data between components

function JoinTypes() {
    var finalType = "";
    lstCom.forEach(k => { finalType = finalType + k.ButtonType });
    return finalType;
}

function Calcular() {
    ListToEnglish();
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

function ListToEnglish(){
    lstCom.forEach(k => { k = VerbToEnglish(k.ButtonType) });
}

function VerbToEnglish(verb){
    if( verb.toLowerCase() == "dias"){return "days";}
    else if( verb.toLowerCase() == "horas"){return "hours";}
    else if( verb.toLowerCase() == "minutos"){return "minutes";}
    else if( verb.toLowerCase() == "segundos"){return "seconds";}
    else if( verb.toLowerCase() == "para"){return "to";}
    else if( verb.toLowerCase() == "de"){return "of";}
    else {return verb;}
}

var lstCom = [];
function DateTimeCalc() {

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
                lstCom = [];
                setParcial('');
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

    const BotaoNumero = 'waves-effect waves-light btn';
    const BotaoNumeroRed = 'waves-effect waves-light btn red';
    const ColNumero = 'col s2 m2 l2 center-align ';
    const ColBases = 'col s4 m4 l4 center-align';

    return (

        <div className='row ' >

            <div className="row hideD">
                <div className="col hide-on-med-and-down red">
                    large
                </div>
                <div className="col hide-on-large-only hide-on-small-only show-on-medium  red ">
                    medium
                </div>
                <div className="col hide-on-med-and-up  red ">
                    small
                </div>
            </div>
            <Estilo />
            <div className="row ">
                <div className="col s12 offset-m2 m8 l7   ">
                    <div className="row ">
                        <Painel Result={Res} Parcial={Parcial} Sub={Sub} />
                    </div>
                      
                    <div className="row " >
                        <Botao valor="7" cor={BotaoNumero} col={ColNumero} textColor="white-text" tipo="numero" GetButtonValue={GetButtonValue} />
                        <Botao valor="8" cor={BotaoNumero} col={ColNumero} textColor="white-text" tipo="numero" GetButtonValue={GetButtonValue} />
                        <Botao valor="9" cor={BotaoNumero} col={ColNumero} textColor="white-text" tipo="numero" GetButtonValue={GetButtonValue} />
                        <Botao valor="Days" cor={BotaoNumero} col={ColBases} textColor="dark-text" tipo="base" GetButtonValue={GetButtonValue} />
                        <Botao valor="= " cor="btn-floating btn-large waves-effect waves-light red" col="col s1 m1" textColor="dark-text" tipo="igual" GetButtonValue={GetButtonValue} />
                    </div>
                    <div className="row">
                        <Botao valor="4" cor={BotaoNumero} col={ColNumero} textColor="white-text" tipo="numero" GetButtonValue={GetButtonValue} />
                        <Botao valor="5" cor={BotaoNumero} col={ColNumero} textColor="white-text" tipo="numero" GetButtonValue={GetButtonValue} />
                        <Botao valor="6" cor={BotaoNumero} col={ColNumero} textColor="white-text" tipo="numero" GetButtonValue={GetButtonValue} />
                        <Botao valor="Hours" cor={BotaoNumero} col={ColBases} textColor="dark-text" tipo="base" GetButtonValue={GetButtonValue} />
                        <Botao valor="% " cor={BotaoNumero} col="col s1 m1" textColor="dark-text" tipo="porcentagem" GetButtonValue={GetButtonValue} />
                    </div>
                    <div className="row">
                        <Botao valor="1" cor={BotaoNumero} col={ColNumero} textColor="white-text" tipo="numero" GetButtonValue={GetButtonValue} />
                        <Botao valor="2" cor={BotaoNumero} col={ColNumero} textColor="white-text" tipo="numero" GetButtonValue={GetButtonValue} />
                        <Botao valor="3" cor={BotaoNumero} col={ColNumero} textColor="white-text" tipo="numero" GetButtonValue={GetButtonValue} />
                        <Botao valor="Minutes" cor={BotaoNumero} col={ColBases} textColor="dark-text" tipo="base" GetButtonValue={GetButtonValue} />
                        <Botao valor="To" cor={BotaoNumero} col="col s1 m1" textColor="dark-text" tipo="em" GetButtonValue={GetButtonValue} />
                    </div>
                    <div className="row">
                        <Botao valor="C" cor={BotaoNumeroRed} col={ColNumero} textColor="white-text" tipo="clear" GetButtonValue={GetButtonValue} />
                        <Botao valor="0" cor={BotaoNumero} col={ColNumero} textColor="white-text" tipo="numero" GetButtonValue={GetButtonValue} />
                        <Botao valor="." cor={BotaoNumero} col={ColNumero} textColor="white-text" tipo="numero" GetButtonValue={GetButtonValue} />
                        <Botao valor="Seconds" cor={BotaoNumero} col={ColBases} textColor="dark-text" tipo="base" GetButtonValue={GetButtonValue} />
                        <Botao valor="Of" cor={BotaoNumero} col="col s1 m1" textColor="dark-text" tipo="de" GetButtonValue={GetButtonValue} />
                    </div>
                </div>
                <div className="col s12 offset-m2 m8 l5  ">
                    <div className="card">
                        <div className="card-content">
                            <p>Hi, you can use the calculator with 3 different ways: (You always need to click = when finish)</p>
                        </div>

                        <div className="card-content grey lighten-4">
                            <div id="test4">
                                <p>Calculating the porcentage of a period:</p>
                                <div className="row">
                                    <Botao valor="5" cor={BotaoNumero} col="col s2 m2 l2" textColor="white-text" tipo="numero" GetButtonValue={GetButtonValue} />
                                    <Botao valor="% " cor={BotaoNumero} col="col s2 m2 l2" textColor="dark-text" tipo="porcentagem" GetButtonValue={GetButtonValue} />
                                    <Botao valor="Of" cor={BotaoNumero} col="col s2 m2 l2" textColor="dark-text" tipo="de" GetButtonValue={GetButtonValue} />
                                    <Botao valor="1" cor={BotaoNumero} col="col s2 m2 l2" textColor="white-text" tipo="numero" GetButtonValue={GetButtonValue} />
                                    <Botao valor="Days" cor={BotaoNumero} col="col s2 m2 l2" textColor="dark-text" tipo="base" GetButtonValue={GetButtonValue} />
                                </div>


                            </div>
                            <div id="test5">
                                <p>Converting period bases:</p>
                                <div className="row">
                                    <Botao valor="8" cor={BotaoNumero} col="col s2 m2 l2" textColor="white-text" tipo="numero" GetButtonValue={GetButtonValue} />
                                    <Botao valor="Days" cor={BotaoNumero} col="col s3 m3 l3" textColor="dark-text" tipo="base" GetButtonValue={GetButtonValue} />
                                    <Botao valor="In" cor={BotaoNumero} col="col s2 m2 l2" textColor="dark-text" tipo="em" GetButtonValue={GetButtonValue} />
                                    <Botao valor="Hours" cor={BotaoNumero} col="col s2 m2 l2" textColor="dark-text" tipo="base" GetButtonValue={GetButtonValue} />
                                </div>

                            </div>
                            <div id="test6">
                                <p>Or</p>
                                <div className="row">
                                    <Botao valor="3" cor={BotaoNumero} col="col s2 m2 l2" textColor="white-text" tipo="numero" GetButtonValue={GetButtonValue} />
                                    <Botao valor="0" cor={BotaoNumero} col="col s2 m2 l2" textColor="white-text" tipo="numero" GetButtonValue={GetButtonValue} />
                                    <Botao valor="Hours" cor={BotaoNumero} col="col s2 m2 l2" textColor="dark-text" tipo="base" GetButtonValue={GetButtonValue} />

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



export default DateTimeCalc




