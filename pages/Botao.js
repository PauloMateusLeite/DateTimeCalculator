import {useState} from 'react';
 
   
   export default function Botao(props){ 
       const data = props.valor; 
       return(
       <div className={props.col }  onClick={() => props.GetButtonValue(data,props.tipo)}  >
               <a className={props.cor}>{props.valor}</a>
       </div>
       );
   } 