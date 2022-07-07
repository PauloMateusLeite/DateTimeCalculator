import {useState} from 'react';

function MouseClick(valor,tipo){ 
    console.log(valor,tipo);
    testef(1);
   }
   
   function testef(a){
       console.log(a);
   }
   
   
   export default function Botao(props){
       let [testec,testef] = useState();  
   
       // const tipo = props.tipo;
       return(
       <div className={props.col }  onClick={() => MouseClick(props.valor,props.tipo)}  >
           <div className={props.cor} >
               <span className={props.textColor}>{props.valor} {testec} </span>
           </div>
       </div>
       );
   }