import {useState} from 'react';
 
   
   export default function Botao(props){ 
       const data = props.valor; 
       // const tipo = props.tipo;
       return(
       <div className={props.col }  onClick={() => props.GetButtonValue(data,props.tipo)}  >
           {/*<div className={props.cor} >*/}
           {/*    <span className={props.textColor}>{props.valor} </span>*/}
           {/*    </div>*/}


               <a className={props.cor}>{props.valor}</a>

       </div>
       );
   } 