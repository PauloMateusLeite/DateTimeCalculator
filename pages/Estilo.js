import Materialize from './Materialize';

const textRed =  " .vermelho {color:red;} ";
const textSize8 =  " .fonte8 {font-size: 8px;} ";
const textSize12 =  " .fonte12 {font-size: 12px;} ";
const textSize10 =  " .fonte10 {font-size: 10px;} ";
const greyDark =  " .CinzaEscuro {color:DarkGrey;} ";
const greyLight =  " .CinzaClaro {color:LightGrey;} ";
const thinLine =  " .LinhaFina {line-height: 50%;} ";
const red =  " .red {border: 1px solid #FF0000;} ";
const show =  " .showD {display: block;} ";
const hide =  " .hideD {display: none;} ";
const active = " .botao:active {background-color: #F0F0F0;} ";
const hover = " .botao:hover {background-color: #F6F6F6;} ";

export default function Estilo(){
    return(
        <div>
            <Materialize />
            <style>
                {textRed}
                {textSize8}
                {textSize12}
                {textSize10}
                {greyDark}
                {greyLight}
                {thinLine}
                {red}
                {hide}
                {show}
                {hover}
                {active}
            </style>  
        </div>
    );

}